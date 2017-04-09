import {createStore,combineReducers} from 'redux';

const resourcesReducer = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
        console.log('loading');// eslint-disable-line
        return state;

    case 'FETCH_POSTS_FAILED':
                //elem.title !== action.payload.title
        console.log('failed');// eslint-disable-line
        return state;// eslint-disable-line


    case 'FETCH_POSTS_SUCCESS':
        console.log('success fettch'); // eslint-disable-line   
        return action.payload;

    default:
        return state;
    }
};

export { resourcesReducer };

const allReducers = combineReducers({
    resources: resourcesReducer
});
const store = createStore(allReducers);

export default store;
