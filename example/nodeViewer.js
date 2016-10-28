'use strict';

import React from 'react';
import { ContextMenuLayer } from 'react-contextmenu';

import styles from './styles';

import MenuTypes from './constants';

import FolderIcon from './assets/Folder.png';
import DocIcon from './assets/doc.png';
import ImageIcon from './assets/image.png';

import FileIcon from './FileIcon';

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";


const fileType = (ext) => {
    const imgFileTypes = ['jpg', 'png', 'gif'];
    return imgFileTypes.indexOf(ext);
};

const MENU_1 = 'MENU_1';
const MENU_2 = 'MENU_2';

function collect(props) {
    return { name: props.name };
}

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

export default class NodeViewer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const attributes = {
            'data-count': 0,
            className: 'example-multiple-targets well'
        };

        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);
        let jsonChildren = json !== undefined ? this.props.node.children !== undefined ? this.props.node.children : [this.props.node] : null;
        let imgSrc = '';
        if(!json){ json = HELP_MSG; }
        return (
            <div style={style.base}>
                { jsonChildren ? jsonChildren.map((data1) => {
                    if(data1.children !== undefined){
                        imgSrc = FolderIcon;
                    }else{
                        let ext = data1.name.substr(data1.name.lastIndexOf('.') + 1);
                        if(fileType(ext) !== -1){
                            imgSrc = ImageIcon;
                        }
                        else{
                            imgSrc = DocIcon;
                        }
                    }
                    return (
                            <div key={data1.name}>
                                 <ContextMenuTrigger id={'multi'} holdToDisplay={1000}
                                     collect={collect} >
                                    <FileIcon imgSrc={imgSrc}/>
                                </ContextMenuTrigger>
                                <ContextMenu id={'multi'}>
                                    <MenuItem onClick={this.handleClick} data={{menu:'Cut'}}>Cut</MenuItem>
                                    <MenuItem onClick={this.handleClick} data={{menu:'Copy'}}>Copy</MenuItem>
                                    <MenuItem onClick={this.handleClick} data={{menu:'Delete'}}>Delete</MenuItem>
                                    <MenuItem onClick={this.handleClick} data={{menu:'Rename'}}>Rename</MenuItem> 
                                </ContextMenu>
                            </div>
                    );
                }) : null}
            </div>
        );
    }

    handleClick(e,data){
        console.log(data);
    }
}

NodeViewer.propTypes = {
    node: React.PropTypes.object
};




