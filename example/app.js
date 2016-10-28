'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import {Treebeard, decorators} from '../src/index';

import data from './data';
import styles from './styles';

import MenuTypes from './constants';

import FolderIcon from './assets/Folder.png';
import DocIcon from './assets/doc.png';
// import ImageIcon from './assets/image.png';

import NodeViewer from './nodeViewer';


import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const MENU_1 = 'MENU_1';
const MENU_2 = 'MENU_2';


// Example: Customising The Header Decorator To Include Icons
decorators.Header = (props) => {
    const style = props.style;
    let imgSrc = props.node.children ? FolderIcon : DocIcon;

    return (
        <div style={style.base}>
            <div style={style.title}>
                <img src={imgSrc} style={{ width: '10px', height: '10px' }}/>
                {props.node.name}
            </div>
        </div>
    );
};

class DemoTree extends React.Component {
    constructor(props){
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }

    componentWillMount(){
        let data = localStorage.getItem('home');
        this.setState({
            data: JSON.parse(data)
        });
    }

    render(){
        return (
            <StyleRoot>
                <div style={styles.component}>
                    <Treebeard
                        data={this.state.data}
                        onToggle={this.onToggle}
                        decorators={decorators}
                    />
                </div>
                <div style={styles.component1}>
                {this.state.cursor && this.state.cursor.children !== undefined ?
                        <div>
                        <ContextMenuTrigger id={MENU_1} holdToDisplay={1000}>
                            <NodeViewer node={this.state.cursor}/>
                        </ContextMenuTrigger>
                    <ContextMenu id={MENU_1}>
                        <MenuItem onClick={this.handleClick} data={{menu:this.state.cursor}}>Create Directory</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{menu:'Create File'}}>Create File</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{menu:'Paste'}}>Paste</MenuItem>
                    </ContextMenu>
                    </div> :
                    <NodeViewer node={this.state.cursor}/>
            }
            </div>
            </StyleRoot>

        );
    }

    handleClick(e,data){
        console.log(data);
    }
}

const content = document.getElementById('content');
ReactDOM.render(<DemoTree/>, content);
