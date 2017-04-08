import React from 'react'
import ReactDom from 'react-dom'
import Header from './header.jsx'
import ResourceForm from './resourceForm.jsx'
import MyTable from './myTable.jsx'
import store from './reduxes.js'

const render = () => ReactDom.render(
    <div>
    <Header/>
    <ResourceForm addResource={(resource) => store.dispatch({type: 'ADD_RESOURCES', payload: resource})}/>
    <MyTable resourceData={store.getState().resources} removeResource={(resource) => {
        store.dispatch({type: 'REMOVE_RESOURCE', payload: resource})
    }}/>
</div>, document.getElementById('myApp'));

render()
store.subscribe(render)
