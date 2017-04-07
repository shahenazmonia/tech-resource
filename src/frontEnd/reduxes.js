import {createStore,combineReducers} from 'redux'

const resourcesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RESOURCES':
            return state.concat(action.payload)
        case 'REMOVE_RESOURCE':
            return state.filter((elem) =>
                elem.title !== action.payload.title
            )
            break;
        default:
            return state
    }
}
const allReducers = combineReducers({
    resources: resourcesReducer
})
const store = createStore(allReducers)

export default store;
