/* eslint-disable react/prop-types */
// import "./Card.css";
import sampleImg from "../assets/sampleImg.png";
import CSS from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={CSS.cardContainer}>
        <img src={sampleImg} alt="sampleImg" className={CSS.cardImg} />
        <h1>{props.item}</h1>
        <h3 className="cardTitle">Sample Card</h3>
        <p
          style={{ color: "greenyellow", fontSize: 14, marginBottom: "12px" }}
          className="cardSubTitle"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          laudantium aut cum, excepturi explicabo eligendi.
        </p>
      </div>
    </>
  );
};

export default Card;
