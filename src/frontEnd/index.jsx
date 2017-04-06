import React from 'react'
import ReactDom from 'react-dom'
import Center from './center.jsx'
import store from './reduxes.js'

console.log("asas");
console.log(store);
const render = () => ReactDom.render(<Center resources={store.getState().resources}
      onAdd={resource => store.dispatch({ type: 'ADD_RESOURCES', payload: resource })}
      onRemove={resource => store.dispatch({ type: 'REMOVE_RESOURCE', payload: resource })}
    /> ,document.getElementById('myApp')
);

render()
store.subscribe(render)
