import React from 'react'; // eslint-disable-line
import ReactDom from 'react-dom';
import Header from './header.jsx'; // eslint-disable-line
import ResourceForm from './resourceForm.jsx'; // eslint-disable-line
import MyTable from './myTable.jsx'; // eslint-disable-line
import store from './reduxes.js';
import styles from './css/styles.css';
import actions from './actions.jsx';



const render = () => ReactDom.render(
    <div className={styles}>
    <Header/>
    <ResourceForm addPeople={(people) =>  store.dispatch(actions.success(people))}
                  loading= {() => store.dispatch(actions.loading())}
                  failed= {() => store.dispatch(actions.failed())}/>
    <MyTable resourceData={store.getState().resources} removeResource={(resource) => {
        store.dispatch({type: 'REMOVE_RESOURCE', payload: resource});
    }}/>
</div>, document.getElementById('myApp'));

render();
store.subscribe(render);
