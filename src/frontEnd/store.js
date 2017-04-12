import {createStore,combineReducers} from 'redux';
import resourcesReducer from './reduxes.js';

const allReducers = combineReducers({
    resources: resourcesReducer
});
const store = createStore(allReducers);

export default store;
