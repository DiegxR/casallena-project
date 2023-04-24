import React, { useContext, useEffect } from "react";
import "./stylesFavorites.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import logo from "../../assets/logoRed.svg";
import { useDispatch, useSelector } from "react-redux";
import { getObras } from "../../redux/actions/obrasActions";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { Appcontext } from "../../router/Router";
import Card from "../../components/card/Card";
import CardLoading from "../../components/cardLoading/CardLoading";
import { useNavigate } from "react-router";
import ModalAporte from "../../components/modalAporte/ModalAporte";
const Favorites = () => {
  const dispatch = useDispatch();
  const { obras } = useSelector((store) => store.obras);
  const { user } = useSelector((store) => store.user);
  const { width, filterButton, showModal, setShowModal } =
    useContext(Appcontext);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getObras({ collectionName: "Obras", key: "", value: "" }));
  }, []);
  useEffect(() => {
    console.log(obras);
  }, [obras]);
  return (
    <>
      <ModalAporte isOpen={showModal} Onclose={setShowModal} />
      <motion.section
        initial={{ opacity: -1 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        className="secFavorites"
      >
        <section className="secFavorites_container">
          <header className="secFavorites_head">
            <div className="secFavorites_logoContainer">
              <img src={logo} className="secFavorites_logo" />
              <AiFillHeart className="secFavorites_logoheart" />
            </div>

            <h3 className="secFavorites_title">Favoritos</h3>
          </header>
          <article className="secFavorites_obras">
            {obras ? (
              obras.map((obra, index) => {
                if (user.favorites.includes(obra.cod)) {
                  return (
                    <motion.div
                      style={{ width: `${width < 768 ? "100%" : "330px"}` }}
                      whileHover={{ translateY: -5 }}
                      key={index}
                    >
                      <Card type={2} data={obra} />
                    </motion.div>
                  );
                } else if (
                  (user.favorites.length == 0) &
                  (index == obras.length - 1)
                ) {
                  return (
                    <div className="secFavorites_nofavorites">
                      <div className="secFavorites_nofavoritescontainer">
                        <img
                          src={logo}
                          className="secFavorites_nofavoritesImg"
                        />
                        <AiFillHeart className="secFavorites_nofavoriteslogoheart" />
                        <h1>
                          Aún no tienes tus <span onClick={() => navigate("/home")}>
                            favoritas, escógelas ahora.
                          </span>
                        </h1>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <>
                {[...Array(user.favorites.length)].map((_, index) => (
                  <CardLoading
                    key={index}
                    width={width < 768 ? "100%" : "300px"}
                    height={width < 768 ? "184px" : "350px"}
                  />
                ))}
              </>
            )}
          </article>
        </section>
        <FooterMenu />
      </motion.section>
    </>
  );
};

export default Favorites;
