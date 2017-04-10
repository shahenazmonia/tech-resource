import url from './url.js'; // eslint-disable-line
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
const echoData = (data) => {
    fetch('/insert',{method:'POST',body: JSON.stringify(data)})
    .then(res => res.json())
    .then((result) => {
        console.log(result); // eslint-disable-line
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
        // console.log(results.data.results);// eslint-disable-line
        // this.props.addPeople(results.query.results.rate);
    }).catch(() => {
      //  store.dispatch(thunks.failed());
    });
    // store.dispatch(thunks.loading);
};

export {echoData};
