import {createStore,combineReducers} from 'redux'; // eslint-disable-line
const resourcesReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_RESOURCES':return state.concat(action.payload);
    case 'REMOVE_RESOURCE':return state.filter((elem) =>
                elem.title !== action.payload.title
            );default:return state;
    }
};



export default resourcesReducer;
