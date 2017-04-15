import store from './store.js';

const updateRow=(data) => {
    store.dispatch({type:'UPDATE_TR',payload:data});
};
const freezeRow =() => {
    store.dispatch({type:'FREEZE_TR'});
};

const insertResource = (data) => {
    fetch('/insert',
        {method:'POST',
            body: JSON.stringify(data),
            headers:{
                'content-type':'application/json'
            }}
  )
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
    }).catch((err) => {
        console.log(err); // eslint-disable-line
    });

};
const deleteResource = (id)=> {
    const url = '/delete/'+id;
    fetch(url,{method:'DELETE'})
    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch((err) => {
        store.dispatch({type: 'FETCH_POSTS_FAILED', payload: err});

    });

};

const updateResource = (id,data)=> {

    const url = '/update/'+id;
    fetch(url,{method:'POST',
        body:JSON.stringify(data),
        headers:{
            'content-type':'application/json'
        }})

    .then(res => res.json())
    .then((result) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch((err) => {
        console.log(err); // eslint-disable-line
    });

};
export {insertResource,getAllData,deleteResource,updateResource,updateRow,freezeRow};
