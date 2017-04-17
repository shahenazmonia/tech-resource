import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import ResourceForm from './components/resourceForm.jsx';
import MyTable from './components/myTable.jsx';
import store from './store.js';
import styles from '../../public/css/styles.css';
import {getAllData} from './actions.js';

const render = () => ReactDom.render(
    <div className={styles}>
    <Header/>
    <ResourceForm />
    <MyTable resourceData={store.getState().resources} trStatus ={store.getState().trStatus}/>
</div>, document.getElementById('myApp'));
getAllData();
render();
store.subscribe(render);
