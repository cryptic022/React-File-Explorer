'use strict';

export default {
    component: {
        width: '30%',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        '@media (max-width: 250px)': {
            width: '100%',
            display: 'block'
        }
    },
    component1: {
        width: '70%',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        '@media (max-width: 750px)': {
            width: '100%',
            display: 'block'
        }
    },
    fileIcons: {
        width: '180px',
        height: '180px',
        display: 'inline-block'
    },
    viewer: {
        base: {
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#282C34',
            border: 'solid 1px black',
            padding: '20px',
            color: '#9DA5AB',
            minHeight: '250px'
        }
    }
};
