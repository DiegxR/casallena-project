import React, { useEffect, useState } from "react";
import "./loadPhotoUser.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updatePhotoAsync } from "../../../redux/actions/userActions";
import Loading from "../../../components/loading/Loading";
import { notify } from "../../../services/notify";
import { useNavigate } from "react-router";
const LoadPhotoUser = () => {
  const { user, error, loading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePhoto = async (file) => {
    dispatch(updatePhotoAsync(file, user.id));
  };
  useEffect(() => {
    if (error.status === true) {
      notify(error.message, "#d80416", "#d80416");
    } else if (error.status === false) {
      notify("Foto subida exitosamente", "#027087", "#027087");
    }
  }, [error]);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <motion.section
      initial={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ x: window.innerWidth }}
      animate={{ x: "0%" }}
      className="photo"
    >
      <figure className="photo_container">
        <article className="photo_form">
          <img src={user.photo} alt="" />
          <input onChange={(e) => handlePhoto(e.target.files[0])} type="file" />
        </article>
        <button onClick={() => navigate("/home")}>ENTREMOS</button>
      </figure>
      {loading ? <Loading /> : <></>}
    </motion.section>
  );
};

export default LoadPhotoUser;
