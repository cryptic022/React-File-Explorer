'use strict';

import React, { Component } from 'react';
import { ContextMenu, MenuItem, connect } from 'react-contextmenu';

import MenuTypes from './constants';

class ContextMenuBlock extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e,data){
			console.log(e,data);
	}

	render(){

		return (
            <ContextMenu identifier={MenuTypes.contentMenuBlock}>
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>create file</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>create directory</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>paste</MenuItem>
            </ContextMenu>
        );
	}
}

export default connect(ContextMenuBlock);

