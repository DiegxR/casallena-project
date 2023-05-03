import { React, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import "./modalReservation.scss";
import { Appcontext } from "../../router/Router";
import { useNavigate } from "react-router";
import { FaTheaterMasks } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { MdLocationOn } from "react-icons/md";
import { HiTicket } from "react-icons/hi";
import { getdate12Hours } from "../../services/dateActual";

const ModalReservation = ({ opt = 17 }) => {
  const { user } = useSelector((store) => store.user);
  const { formatterPeso } = useContext(Appcontext);
  const navigate = useNavigate();
  const { showModal, setShowModal } = useContext(Appcontext);
  const [data, setdata] = useState(
    user.dates.find((element) => element.cod == opt)
  );
  const animation = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%" },
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <motion.div
      className={`secModal `}
      initial="hidden"
      animate={showModal ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.3 }}
      id="modalAporte"
    >
      <article className="secModalReser__Card">
        <figure
          className="modalReser__img"
          style={{ backgroundImage: `url(${data?.img})` }}
        >
          <BiArrowBack
            onClick={() => {
              setShowModal(false);
            }}
            className="arrowLeft"
          />
        </figure>

        <div className="modalReser__info">
          <div className="modalReser__item">
            <FaTheaterMasks className="modalReser__icon" />
            <h3>{data?.name}</h3>
          </div>

          <div className="modalReser__item">
            <div className="location">
              <MdLocationOn className="modalReser__icon" />
            </div>
            <p>
              {data?.teatro} {data?.direccion}
            </p>
          </div>

          <div className="modalReser__item">
            <AiOutlineCalendar className="modalReser__icon" />
            <p>
              {data?.currentDate +
                " a las " +
                getdate12Hours(data?.currentHour)}
            </p>
          </div>

          <div className="modalReser__item ">
            <HiTicket className="modalReser__icon" />
            <p>
              {data?.boletas} total: {formatterPeso.format(data?.total)}
            </p>
          </div>

          <div className="modalReser__item QR">
            <QRCode
              size={256}
              style={{
                height: "auto",
                maxWidth: "180px",
                width: "180px",
              }}
              value={`http://localhost:5173/detail/${opt}`}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default ModalReservation;
