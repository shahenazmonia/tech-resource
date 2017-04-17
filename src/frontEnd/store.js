import {createStore,combineReducers} from 'redux';
import {resourcesReducer,editReducer} from './reducers.js';


const allReducers = combineReducers({
    resources: resourcesReducer,
    trStatus: editReducer
});
const store = createStore(allReducers);

export default store;
