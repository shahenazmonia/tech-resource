import {createStore,combineReducers} from 'redux';
import {resourcesReducer} from './reducers.js';


const allReducers = combineReducers({
    resources: resourcesReducer
});
const store = createStore(allReducers);

export {store};
