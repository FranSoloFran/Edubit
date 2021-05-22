

const initialState = {
    loading: false
}

const types={
    checkLoading: '[LOADING] checkStatus'
}



//REDUCER
export const loadingReducer=(state=initialState, action) =>{
    
    switch (action.type) {
        case types.checkLoading:
            return{
                loading: action.payload.status
            }
    
        default:
            return state
    }
}



//ACTION
export const loadingCheck = (status) =>{
    return{
        type: types.checkLoading,
        payload:{
            status
        }
    }
}