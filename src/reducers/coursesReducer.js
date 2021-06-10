import { loadingCheck } from "./loadingReducer";
import { db } from '../firebase/firebase-config';

const initialState = {
    userCourses: []
}

const types = {
    setUserCourses: '[Courses] SetUserCourses'
}

//REDUCERS
export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setUserCourses:
            return {
                ...state,
                userCourses: action.payload.courses,
            };

        default:
            return state;

    };
}

export const saveCourseEnroll = (course) => {
    return async (dispatch, getState) => {
        dispatch(loadingCheck(true));
        let array = getState().courses.userCourses;
        const found = array.find(item => item.id === course.id)
        if (!found) {
            array.push(course);
            array.forEach(async (item) => {
                await db.collection(`${getState().auth.uid}`)
                    .doc('courses')
                    .collection('assignedCourses')
                    .doc(`${item.id}`)
                    .set(item);
            })
            dispatch(setCourseList(array));
        }
        else {
            let newArray = [];
            array.forEach(async (item) => {
                if (item.id !== course.id) {
                    newArray.push(item)
                }
                else {
                    await db.collection(`${getState().auth.uid}`)
                        .doc('courses')
                        .collection('assignedCourses')
                        .doc(`${item.id}`)
                        .delete();
                }
            });
            dispatch(setCourseList(newArray));
        }
        dispatch(loadingCheck(false));
    }
}

const setCourseList = (courses) => {
    return {
        type: types.setUserCourses,
        payload: {
            courses
        }
    };
}

export const getCourses = () => {
    return async (dispatch, getState) => {
        let array = [];
        dispatch(loadingCheck(true));
        await db.collection(`${getState().auth.uid}`)
            .doc('courses')
            .collection('assignedCourses')
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    array.push(doc.data())
                });
            })
        dispatch(setCourseList(array));
        dispatch(loadingCheck(false));
    }
}


