import React from 'react';

const Categories = () => {
    let categories = [
        {
            name: 'Clothes',
            parentId: null,
            id: 1
        },
        {
            name: 'T-Shirts',
            parentId: 1,
            id: 3
        },
        {
            name: 'Pins',
            parentId: null,
            id: 2
        },
        {
            name: 'Wooden pins',
            parentId: 2,
            id: 7
        },
        {
            name: 'Accessories',
            parentId: null,
            id: 10
        }
    ];

    let parents = categories.filter(item => {
        return item.parentId === null;
    });

    parents.map(parent => {
        let children = categories.filter(item => {
            return item.parentId === parent.id;
        });
        if(children.length > 0){
            parent.children = children
        }; 
        return parent;
    })


    console.log(parents);

    return (
        <pre>
            {parents.map(parent => {
                return JSON.stringify(parent);
            })}
        </pre>
    );
}

export default Categories;