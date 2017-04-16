const resourcesReducer = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
        console.log('loading');// eslint-disable-line
        return state;

    case 'FETCH_POSTS_FAILED':
        console.log('failed', action.payload);// eslint-disable-line no-console
        return state;


    case 'FETCH_POSTS_SUCCESS':
        return action.payload;

    default:
        return state;
    }
};

const editReducer =(state = {id:-1} , action)=> {
    switch (action.type) {
    case 'UPDATE_TR':
        return action.payload;
    case 'FREEZE_TR':
        return {id:-1};
    default:return state;
    }
};

export {resourcesReducer,editReducer};
