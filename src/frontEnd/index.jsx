import React from 'react'
import ReactDom from 'react-dom'
import Center from './center.jsx'
import store from './reduxes.js'

const render = () => ReactDom.render(
    <Center/>, document.getElementById('myApp'));

render()
store.subscribe(render)
