import React, { useState } from "react";
// import css from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ name, female, male, id }) {
  //toggle function
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  // when you click on each card handle click function navigates you yo a different page with the id sent aswell
  const handleClick = (e) => {
    const id = e.target.id;
    // navigate to the exercise page when clicked
    navigate("/exercise", { state: id });
    // console.log(id);
  };

  function toggleImage() {
    setToggle(!toggle);
  }
  return (
    // <ul>
    <li>
      <p>{name}</p>
      <button onClick={toggleImage}>Toggle Image</button>

      {toggle ? (
        <img
          src={female}
          alt="female exercise"
          onClick={handleClick}
          id={id}
        ></img>
      ) : (
        <img src={male} alt="male exercise"></img>
      )}
    </li>
    //  </ul>
  );
}

export default Card;
