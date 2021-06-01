// import {types} from '../types/types';
import { firebase, googleAuthProvider, db } from '../firebase/firebase-config';
import { loadingCheck } from './loadingReducer';
import { showError } from './msgboxReducer';
import { returnDocuments } from '../helper/returnDocuments';

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
                name: action.payload.name,
                money: action.payload.money,
                documentId: action.payload.documentId
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
                const docRef = await db.collection(`${user.uid}`).get().then(snap => returnDocuments(snap));
                dispatch(login(user.uid, docRef[0].information.name, docRef[0].trading.money, docRef[0].id));
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
                    information: {
                        name: name,
                        email: email,
                        sexo: "",
                        edad: ""
                    },
                    trading: {
                        money: 10000.00
                    }
                }
                await db.collection(`${user.uid}`).add(newUserData);
                const docRef = await db.collection(`${user.uid}`).get().then(snap => returnDocuments(snap));

                dispatch(login(user.uid, newUserData.information.name, newUserData.trading.money, docRef[0].id));
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
            .then(async({ user }) => {

                const newUserData = {
                    information: {
                        name: user.displayName,
                        email: user.email,
                        sexo: "",
                        edad: ""
                    },
                    trading: {
                        money: 10000.00
                    }
                }
                await db.collection(`${user.uid}`).add(newUserData);
                const docRef = await db.collection(`${user.uid}`).get().then(snap => returnDocuments(snap));
                console.log(docRef);
                dispatch(login(user.uid, newUserData.information.name, newUserData.trading.money, docRef[0].id));
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





export const login = (uid, name, money, documentId) => {
    return {
        type: types.login,
        payload: {
            uid,
            name,
            money,
            documentId
        }
    }
}


export const logout = () => {
    return {
        type: types.logout,
    }
};