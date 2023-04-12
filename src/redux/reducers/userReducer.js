import { userTypes } from "../types/userTypes";

const initialState = {
    name: '',
    location: '',
    userName: '',
    email: ''
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case userTypes.CREATE_USER:
            return{
                ...state,
                ...action.payload
            }
        case userTypes.LOGIN_USER:
            return{
                ...state,
                ...action.payload
            }
        case userTypes.LOGOUT_USER: 
            return {
                ...initialState
            }
        default:
            return state;
    }
}