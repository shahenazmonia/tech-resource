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

test('FETCH_POSTS_SUCCESS should failed resources', () => {
    const expectedAction = {
        type: 'FETCH_POSTS_FAILED',
        payload: resources
    };
    resourcesReducer([], Object.assign({}, expectedAction, {type: 'FETCH_POSTS_SUCCESS'}));
    expect(resourcesReducer([], [])).toEqual([]);

});
test('UPDATE_TR should change state to id', () => {
    const expectedAction = {
        type: 'UPDATE_TR',
        payload: id
    };
    editReducer(id, Object.assign({}, expectedAction));
    expect(editReducer([], expectedAction)).toEqual(id);

});
test('FREEZE_TR should change state to null', () => {
    const expectedAction = {
        type: 'FREEZE_TR'
    };
    editReducer(id, Object.assign({}, expectedAction));
    expect(editReducer(id, expectedAction)).toEqual(null);

});
