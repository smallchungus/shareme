import * as api from '../api';

const getPosts = () => async(dispatch) => {

    try {
        const {data } = await api.fetchPosts(); 
        dispatch(action{type: 'FETCH_ALL', payload: []});
    }
    const action = 

    
}