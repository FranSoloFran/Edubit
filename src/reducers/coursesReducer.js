import { loadingCheck } from "./loadingReducer";

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
            dispatch(setCourseList(array));
        }
        else {
            let newArray = [];
            array.forEach(item => {
                if (item.id !== course.id) {
                    newArray.push(item)
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
        let array = getState().courses.userCourses;
        dispatch(setCourseList(array));
    }
}


