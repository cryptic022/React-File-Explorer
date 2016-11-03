'use strict';

import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import FileIcon from './FileIcon';

function collect(props) {
    return { name: props.name };
}

export default class ContextMenuIcon extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e,data){
			console.log(this.refs.iconImage);
	}

	render(){
		const {data1, imgSrc} = this.props;
		return (
         <ContextMenuTrigger id={'multi'} holdToDisplay={1000}
                collect={collect} >
                 <FileIcon imgSrc={imgSrc} key={data1.name} ref="iconImage" value={data1}/>
         </ContextMenuTrigger>
        );
	}
}



