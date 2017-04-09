import React from 'react'; // eslint-disable-line
import ReactDom from 'react-dom';
import Header from './header.jsx'; // eslint-disable-line
import ResourceForm from './resourceForm.jsx'; // eslint-disable-line
import MyTable from './myTable.jsx'; // eslint-disable-line
import resourcesReducer from './reduxes.js';
import store from './store.js'
import styles from './css/styles.css';

const render = () => ReactDom.render(
    <div className={styles}>
    <Header/>
    <ResourceForm addResource={(resource) => store.dispatch({type: 'ADD_RESOURCES', payload: resource})}/>
    <MyTable resourceData={store.getState().resources} removeResource={(resource) => {
        store.dispatch({type: 'REMOVE_RESOURCE', payload: resource});
    }}/>
</div>, document.getElementById('myApp'));

render();
store.subscribe(render);
