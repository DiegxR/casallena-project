import { createUserWithEmailAndPassword } from "firebase/auth";
import { userTypes } from "../types/userTypes";
import { auth } from "../../firebase/firebaseConfig";

const loginUser = (data) =>{
    return {
        type: userTypes.LOGIN_USER,
        payload: data
    }
}

export const createUserWithEmail = (data) =>{
    return async (dispatch) =>{
        createUserWithEmailAndPassword(auth, data.email, data.password)
    }
}