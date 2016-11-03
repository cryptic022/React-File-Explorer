'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import {Treebeard, decorators} from '../src/index';
import flatten from 'Flat';

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

function collect(props) {
    return { name: props.name };
}


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
                        animations={false}
                    />
                </div>
                <div style={styles.component1}>
                {this.state.cursor && this.state.cursor.children !== undefined ?
                        <div>
                        <ContextMenuTrigger id={MENU_1} holdToDisplay={1000} name={this.state.cursor} collect={collect}>
                            <NodeViewer node={this.state.cursor}/>
                        </ContextMenuTrigger>
                    <ContextMenu id={MENU_1}>
                        <MenuItem onClick={this.handleClick} data={{action:'Create Directory'}}>Create Directory</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{action:'Create File'}}>Create File</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{action:'Paste'}}>Paste</MenuItem>
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


// import React, { Component } from 'react';

// import ReactDOM from 'react-dom';

// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

// const MENU_TYPE = 'MULTI';

// const targets = [{
//     name: 'Banana'
// }, {
//     name: 'Apple'
// }, {
//     name: 'Papaya'
// }, {
//     name: 'Mango'
// }, {
//     name: 'Orange'
// }, {
//     name: 'Pineapple'
// }];

// function collect(props) {
//     return { name: props.name };
// }

// export default class MultipleTargets extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { logs: [] };
//     }

//     handleClick = (e, data, target) => {
//         const count = parseInt(target.getAttribute('data-count'), 10);

//         if (data.action === 'Added') {
//             target.setAttribute('data-count', count + 1);

//             return this.setState(({logs}) => ({
//                 logs: [`${data.action} 1 ${data.name}`, ...logs]
//             }));
//         }

//         if (data.action === 'Removed' && count > 0) {
//             target.setAttribute('data-count', count - 1);

//             return this.setState(({logs}) => ({
//                 logs: [`${data.action} 1 ${data.name}`, ...logs]
//             }));
//         }

//         this.setState(({logs}) => ({
//             logs: [` ${data.name} cannot be ${data.action.toLowerCase()}`, ...logs]
//         }));
//     }

//     render() {
//         const attributes = {
//             'data-count': 0,
//             className: 'example-multiple-targets well'
//         };

//         return (
//             <div>
//                 <h3>Multiple Menus</h3>
//                 <p>This demo shows usage of multiple menus on multiple targets.</p>
//                 <div className='row'>
//                     {targets.map((item, i) => (
//                         <div key={i} className='col-sm-2 text-center'>
//                             <ContextMenuTrigger id={MENU_TYPE} name={item.name}
//                                 holdToDisplay={1000}
//                                 collect={collect} attributes={attributes}>
//                                 {item.name}
//                             </ContextMenuTrigger>
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                     {this.state.logs.map((log, i) => (<p key={i}>{log}</p>))}
//                 </div>
//                 <ContextMenu id={MENU_TYPE}>
//                     <MenuItem onClick={this.handleClick} data={{action: 'Added'}}>Add 1 count</MenuItem>
//                     <MenuItem onClick={this.handleClick} data={{action: 'Removed'}}>Remove 1 count</MenuItem>
//                 </ContextMenu>
//             </div>
//         );
//     }
// }

ReactDOM.render(<DemoTree />, document.getElementById('content'));