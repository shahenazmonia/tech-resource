import React from 'react'; // eslint-disable-line
import {store} from './store.js'; //eslint-disable-line
import {resourcesReducer} from './reducers.js';

const resources = [
    {
        tech: 'test',
        url: 'test12'
    }
];

test('FETCH_POSTS_SUCCESS should fetch resources', () => { //eslint-disable-line
    const expectedAction = {
        type: 'FETCH_POSTS_SUCCESS',
        payload: resources
    };
     expect(resourcesReducer([], expectedAction)).toEqual(resources); //eslint-disable-line

});

test('FETCH_POSTS_SUCCESS should failed resources', () => { //eslint-disable-line
    const expectedAction = {
        type: 'FETCH_POSTS_FAILED',
        payload: resources
    };
    resourcesReducer([], Object.assign({}, expectedAction, {type: 'FETCH_POSTS_SUCCESS'}));
     expect(resourcesReducer([], [])).toEqual([]); //eslint-disable-line

});
