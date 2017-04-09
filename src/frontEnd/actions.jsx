export default {
    success : (people)=> {
        return {
            type: 'FETCH_POSTS_SUCCESS',
            payload: people
        };
    },
    loading :()=>{
        return {
            type: 'FETCH_POSTS_REQUEST'
        };
    },
    failed :()=>{
        return {
            type: 'FETCH_POSTS_FAILED'
        };
    }
};
