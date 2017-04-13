import store from './reduxes.js';


const thunks = { // eslint-disable-line
    success : (people) => {
        return {type: 'FETCH_POSTS_SUCCESS', payload: people};
    },
    loading : () => {
        return {type: 'FETCH_POSTS_REQUEST'};
    },
    failed : () => {
        return {type: 'FETCH_POSTS_FAILED'};
    }
};
const insertResource = (data) => {
    fetch('/insert',{method:'POST',body: JSON.stringify(data)})
    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });
};

const getAllData = ()=> {
    fetch('/data',{method:'GET'})
    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });

};
const deleteResource = (id)=> {
    const url = '/delete/'+`${id}`;
    fetch(url,{method:'DELETE'})
    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });

};

const updateResource = (id,data)=> {
    const url = '/update/'+`${id}`;
    fetch(url,{method:'POST',body:JSON.stringify(data)})
    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });

};
export {insertResource,getAllData,deleteResource,updateResource};
