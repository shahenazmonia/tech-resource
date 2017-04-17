import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import AddResources from './container/addResources.jsx';
import TableContainer from './container/TableContainer.jsx';
import store from './store.js';
import styles from '../../public/css/styles.css';
import {getAllData} from './actions.js';
import {Provider} from 'react-redux';

const render = () => ReactDom.render(
  <Provider store={store}>
    <div className={styles}>
    <Header/>
    <AddResources />
    <TableContainer />

</div>
  </Provider>
  , document.getElementById('myApp'));
getAllData();
render();
store.subscribe(render);
