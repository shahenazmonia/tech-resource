import {resourcesReducer} from './reducers.js';

const resources = [
    {
        tech: 'test',
        url: 'test12'
    }
];

test('FETCH_POSTS_SUCCESS should fetch resources', () => {
    const expectedAction = {
        type: 'FETCH_POSTS_SUCCESS',
        payload: resources
    };
    expect(resourcesReducer([], expectedAction)).toEqual(resources);

});

test('FETCH_POSTS_SUCCESS should failed resources', () => {
    const expectedAction = {
        type: 'FETCH_POSTS_FAILED',
        payload: resources
    };
    resourcesReducer([], Object.assign({}, expectedAction, {type: 'FETCH_POSTS_SUCCESS'}));
    expect(resourcesReducer([], [])).toEqual([]);

});
