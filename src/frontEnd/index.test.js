import React from 'react'; // eslint-disable-line
import store from './reduxes.js'; //eslint-disable-line
import resourcesReducer from './reduxes.js' //eslint-disable-line

// import {resourcesReducer} from './reduxes.js';
const resources = [
    {
        title: 'book',
        url: 'www.goodread.com'
    }
];
test('ADD_RESOURCES should add title and url', () => { //eslint-disable-line

    const expectedAction = {
        type: 'ADD_RESOURCES',
        payload: resources
    };
    expect(resourcesReducer([], expectedAction)).toEqual(resources); //eslint-disable-line

});

test('REMOVE_RESOURCE should remove title and url', () => { // eslint-disable-line
    const expectedAction = {
        type: 'REMOVE_RESOURCE',
        payload: resources
    };
    resourcesReducer([], Object.assign({}, expectedAction, {type: 'ADD_RESOURCES'}));
    expect(resourcesReducer([], expectedAction)).toEqual([]); // eslint-disable-line

});
