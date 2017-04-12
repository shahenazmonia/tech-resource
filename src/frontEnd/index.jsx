import React from 'react'; // eslint-disable-line
import ReactDom from 'react-dom';
import Header from './header.jsx'; // eslint-disable-line
import ResourceForm from './resourceForm.jsx'; // eslint-disable-line
import MyTable from './myTable.jsx'; // eslint-disable-line
import store from './reduxes.js';
import resourcesReducer from './reduxes.js';


import styles from './css/styles.css';
import {getAllData} from './actions.js';

const render = () => ReactDom.render(
    <div className={styles}>
    <Header/>
    <ResourceForm />
    <MyTable resourceData={store.getState().resources}/>
</div>, document.getElementById('myApp'));
getAllData();
render();
store.subscribe(render);
