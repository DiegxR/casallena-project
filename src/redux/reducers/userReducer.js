import { userTypes } from "../types/userTypes";

const initialState = {
    user: {
        name: '',
        location: '',
        userName: '',
        email: ''
    },
    error: {
        status: undefined,
        message: ''
    },
    loading: false
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case userTypes.LOGIN_USER:
            return{
                ...state,
                user : {...action.payload}
            }
            case userTypes.TOGGLE_LOADING: 
                return {
                    ...state,
                    loading: !state.loading  
                }
        case userTypes.LOGOUT_USER: 
            return {
                ...initialState
            }
        default:
            return state;
    }
}