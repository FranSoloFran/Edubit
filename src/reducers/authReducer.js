// import {types} from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { loadingCheck } from './loadingReducer';
import { showError } from './msgboxReducer';


const types={
    login:'[Auth] Login',
    logout: '[Auth] Logout',
}



//REDUCERS
export const authReducer = (state={}, action) =>{

    switch(action.type){
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.name
            }
        
        case types.logout:
             return {}
        
        default:
            return state
    }
}






//ACTIONS
export const loginWithEmail = (email, password) =>{
    return(dispatch) =>{

        dispatch(loadingCheck(true));
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{            
            dispatch(login(user.uid,user.displayName));         
            dispatch(loadingCheck(false));   
        })
        .catch(e =>{
            dispatch(loadingCheck(false));
            dispatch(showError('Error', e.message));
        })
    }
}





export const startRegisterWithEmail = (email, passwod, name) => {
    return (dispatch) => {

        dispatch(loadingCheck(true));        
        firebase.auth().createUserWithEmailAndPassword(email, passwod)
        .then( async ({ user }) => {
            await user.updateProfile({displayName: name});

            dispatch(login(user.uid,user.displayName));
            dispatch(loadingCheck(false));
        })
        .catch( e=>{
            dispatch(loadingCheck(false));
            dispatch(showError('Error', e.message));
        })
    }
}




export const startGoogleLogin = () => {
    return (dispatch) => {
        dispatch(loadingCheck(true));
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(loadingCheck(false));
            })
            .catch( e=>{
                dispatch(loadingCheck(false));
                dispatch(showError('Error', e.message));
            })
    }
}



export const startLogout = () => {
    return async (dispatch) =>{
        firebase.auth().signOut();
        dispatch(logout());
    }
};





export const login = (uid, name) =>{
    return{
        type: types.login,
        payload:{
            uid,
            name
        }
    }
}


export const logout = () => {
    return {
        type: types.logout,        
    }
};