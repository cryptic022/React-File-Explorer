'use strict';

import React from 'react';
import { ContextMenuLayer } from 'react-contextmenu';

import styles from './styles';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

export default class FileIcon extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <img src={this.props.imgSrc} style={styles.fileIcons}/>
        );
    }
}

FileIcon.propTypes = {
    imgSrc: React.PropTypes.string
};



