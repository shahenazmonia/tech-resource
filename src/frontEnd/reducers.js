const resourcesReducer = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_POSTS_REQUEST':

        return state;

    case 'FETCH_POSTS_FAILED':
        // eslint-disable-next-line no-console
        console.log(action.payload);
        return state;

    case 'FETCH_POSTS_SUCCESS':
        return action.payload;

    default:
        return state;
    }
};

export {resourcesReducer};
