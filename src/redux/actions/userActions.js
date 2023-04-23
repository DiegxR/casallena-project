import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { userTypes } from "../types/userTypes";
import { auth, dataBase } from "../../firebase/firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { fileUpload } from "../../services/uploadFile";
import { getUserCollection } from "../../services/getUser";
const collectionUsers = collection(dataBase, "Users");

export const loginUser = (user, error) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: {
      user,
      error,
    },
  };
};
const toggleLoading = () => {
  return {
    type: userTypes.TOGGLE_LOADING,
  };
};
const updatePhoto = (file, error) => {
  return {
    type: userTypes.UPDATE_PHOTO,
    payload: {
      file,
      error,
    },
  };
};
export const toggleError = () => {
  return {
    type: userTypes.TOGGLE_ERROR,
  };
};
const logout = () => {
  return {
    type: userTypes.LOGOUT_USER,
  };
};
export const createUserWithEmail = (data) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    createUserWithEmailAndPassword(auth, data.email, data.passwordConf)
      .then(async ({ user }) => {
        const newUser = {
          uid: user.auth.currentUser.uid,
          name: data.name,
          email: user.auth.currentUser.email,
          location: data.location,
          favorites: [],
          dates: [],
        };
        const doc = await addDoc(collectionUsers, newUser);
        console.log(doc.id);
        dispatch(
          loginUser({ ...newUser, id: doc.id }, { status: "", message: "" })
        );
        dispatch(toggleLoading());
      })
      .catch((error) => {
        dispatch(loginUser({}, { status: true, message: error.message }));
        dispatch(toggleLoading());
      });
  };
};

export const updatePhotoAsync = (file, idf) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const urlPhoto = await fileUpload(file);
      dispatch(updatePhoto(urlPhoto, { status: false, message: "" }));
      const userRef = doc(dataBase, "Users", idf);
      await updateDoc(userRef, { photo: urlPhoto });
      dispatch(toggleLoading());
    } catch (error) {
      console.log(error);
      dispatch(
        updatePhoto(
          "https://res.cloudinary.com/dinmmqdca/image/upload/v1681566217/rf8wp1jr4fxdtiq94rsb.png",
          { status: true, message: error.message }
        )
      );
      dispatch(toggleLoading());
    }
  };
};

export const loginUserAsync = (data) => {
  return async (dispatch) => {
    dispatch(toggleError());
    dispatch(toggleLoading());
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const currentUser = await getUserCollection(user.uid);
      dispatch(loginUser(currentUser, { status: false, message: "" }));
      dispatch(toggleLoading());
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, { status: true, message: error.message }));
      dispatch(toggleLoading());
    }
  };
};

export const logoutAsync = (user) => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      const userDoc = await getUserCollection(user.uid);
      console.log(userDoc);
      let newUser = {
        uid: user.uid,
        name: user.displayName,
        location: "",
        userName: user.displayName,
        email: user.email,
        photo: user.photoURL,
        favorites: [],
        dates: [],
      };
      if (!userDoc) {
        const userBase = await addDoc(collectionUsers, newUser);
        dispatch(
          loginUser(
            { ...newUser, id: userBase.id },
            { status: undefined, message: "" }
          )
        );
      } else {
        newUser = userDoc;
        dispatch(loginUser({ ...newUser }, { status: undefined, message: "" }));
      }
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, { status: true, message: error.message }));
    }
  };
};

const handleFavorites = (cod) => {
  return {
    type: userTypes.HANDLE_FAVORITES,
    payload: cod,
  };
};

export const handleFavoritesAsync = (cod) => {
  return async (dispatch, getState) => {
    try {
      let currentFavorites;
      console.log(getState().user);
      if (getState().user.user.favorites.length !== 0) {
        if (getState().user.user.favorites.includes(cod)) {
          currentFavorites = getState().user.user.favorites.filter(
            (item) => item !== cod
          );
        } else {
          currentFavorites = [...getState().user.user.favorites, cod];
        }
      } else {
        currentFavorites = [...getState().user.user.favorites, cod];
      }
      const userRef = doc(dataBase, "Users", getState().user.user.id);
      await updateDoc(userRef, { favorites: currentFavorites });
      dispatch(handleFavorites(currentFavorites));
    } catch (error) {
      console.log(error);
    }
  };
};
