// import {types} from '../types/types';
import { firebase, googleAuthProvider, db } from '../firebase/firebase-config';
import { loadingCheck } from './loadingReducer';
import { showError } from './msgboxReducer';

const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}



//REDUCERS
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
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
export const loginWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(loadingCheck(true));
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                const docRef = await db.collection(`${user.uid}`).doc("userInfo").get().then((docs) => docs.data());
                dispatch(login(user.uid, docRef.name));
                dispatch(loadingCheck(false));
            })
            .catch(e => {
                dispatch(loadingCheck(false));
                dispatch(showError('Error', e.message));
            })
    }
}





export const startRegisterWithEmail = (email, passwod, name) => {
    return (dispatch) => {

        dispatch(loadingCheck(true));
        firebase.auth().createUserWithEmailAndPassword(email, passwod)
            .then(async ({ user }) => {

                const newUserData = {
                    name: name,
                    email: email,
                    sexo: "",
                    edad: ""
                }

                const newTrading = {
                    money: 10000.00
                }

                await db.collection(`${user.uid}`).doc("userInfo").set(newUserData);
                await db.collection(`${user.uid}`).doc("trading").set(newTrading);
                const docRef = await db.collection(`${user.uid}`).doc("userInfo").get().then((docs) => docs.data());
                dispatch(login(user.uid, docRef.name));
                dispatch(loadingCheck(false));
            })
            .catch(e => {
                dispatch(loadingCheck(false));
                dispatch(showError('Error', e.message));
            })
    }
}




export const startGoogleLogin = () => {
    return (dispatch) => {
        dispatch(loadingCheck(true));
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async ({ user }) => {

                await db.collection(`${user.uid}`).doc("userInfo").get().then( async(docs) => {
                    if (docs.exists) {
                        dispatch(login(user.uid, user.displayName));
                    } 
                    else {
                        const newUserData = {
                            name: user.displayName,
                            email: user.email,
                            sexo: "",
                            edad: ""
                        }
        
                        const newTrading = {
                            money: 50000.00
                        }
        
                        await db.collection(`${user.uid}`).doc("userInfo").set(newUserData);
                        await db.collection(`${user.uid}`).doc("trading").set(newTrading);
                        dispatch(login(user.uid, user.displayName));
                    }
                });
              
                dispatch(loadingCheck(false));
            })
            .catch(e => {
                dispatch(loadingCheck(false));
                dispatch(showError('Error', e.message));
            })
    }
}



export const startLogout = () => {
    return (dispatch) => {
        firebase.auth().signOut();
        dispatch(logout());
    }
};



export const setLogin = (uid, name) => {
    return (dispatch) => {
        dispatch(login(uid, name));
    }
}


const login = (uid, name) => {
    return {
        type: types.login,
        payload: {
            uid,
            name
        }
    }
}


const logout = () => {
    return {
        type: types.logout,
    }
};