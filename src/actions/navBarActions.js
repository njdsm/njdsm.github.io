import { PAGE } from './types';

//each action creator is a function
//thunk middleware allows us to call dispatch function directly so we can make asynchronous requests
//dispatch is like resolving a promise; dispatch allows for sending of data
export const login = (url) => dispatch => {
    try{
        dispatch({
            type: PAGE,
            payload: url,
        })
    }
    catch(error){
        alert(`Whoops! ${error}. Looks like we're having some technical difficulties. Try again later!`)
    }
}

