'use strict';

import React, { Component } from 'react';
import { ContextMenu, MenuItem, connect } from 'react-contextmenu';

import MenuTypes from './constants';

class ContextMenuIcon extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e,data){
			console.log(e,data);
	}

	render(){

		return (
            <ContextMenu identifier={MenuTypes.contentMenuIcon}>
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>cut</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>copy</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>delete</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>rename</MenuItem>
            </ContextMenu>
        );
	}
}

export default connect(ContextMenuIcon);

