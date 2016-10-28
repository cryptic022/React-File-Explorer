'use strict';

var data = {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    children: [
        {
            name: 'example',
            id:2,
            children: [
                { name: 'app.txt',id:3 },
                { name: 'data.txt', id:3 },
                { name: 'index.png' , id:3}
            ]
        },
        {
            name: 'node_modules',
            id:4,
            loading: true,
            children: []
        },
        {
            name: 'src',
            id:5,
            children: [
                {
                    name: 'components',
                    id:6,
                    children: [
                        { name: 'decorators.txt',id:7 },
                        { name: 'treebeard.png',id:8 }
                    ]
                },
                { name: 'index.txt',id:9 }
            ]
        },
        {
            name: 'themes',
            id:10,
            children: [
                { name: 'animations.txt', id:11 },
                { name: 'default.txt', id:12 }
            ]
        },
        { name: 'Gulpfile.txt',id:13 },
        { name: 'index.txt',id:14 },
        { name: 'package.txton', id:15 }
    ]
};
