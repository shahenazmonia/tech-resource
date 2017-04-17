import {resourcesReducer,editReducer} from './reducers.js';

const resources = [
    {
        tech: 'test',
        url: 'test12'
    }
];
const id = 10;

test('FETCH_POSTS_SUCCESS should fetch resources', () => {
    const expectedAction = {
        type: 'FETCH_POSTS_SUCCESS',
        payload: resources
    };
    expect(resourcesReducer([], expectedAction)).toEqual(resources);
});

test('FETCH_POSTS_FAILED should return empty resources ', () => {
    const expectedAction = {
        type: 'FETCH_POSTS_FAILED',
        payload: resources
    };
    expect(resourcesReducer([], expectedAction)).toEqual([]);
});

test('UPDATE_TR should change state to id', () => {
    const expectedAction = {
        type: 'UPDATE_TR',
        payload: id
    };
    expect(editReducer(null, expectedAction)).toEqual(id);
});

test('FREEZE_TR should change state to null', () => {
    const expectedAction = {
        type: 'FREEZE_TR'
    };
    expect(editReducer(id, expectedAction)).toEqual(null);
});
