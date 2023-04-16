import { userTypes } from "../types/userTypes";
const initialState = {
    user: {
        name: '',
        location: '',
        userName: '',
        email: '',
        photo: 'https://res.cloudinary.com/dinmmqdca/image/upload/v1681566217/rf8wp1jr4fxdtiq94rsb.png',
        uid: '',
        id: ''
    },
    error: {
        status: null,
        message: ''
    },
    loading: false
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case userTypes.LOGIN_USER:
            return{
                ...state,
                user : {
                    ...state.user,
                    ...action.payload.user
                },
                error: {...action.payload.error}
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
        case userTypes.TOGGLE_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: null
                }
            }
        case userTypes.UPDATE_PHOTO:
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.payload.file
                },
                error: {...action.payload.error}
            }
        default:
            return state;
    }
}