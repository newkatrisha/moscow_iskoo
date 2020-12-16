import React from "react";
import "../Card.css";

const Card = (props) => {
  let buttons = () => {
    if (props.header === "Надзорник" || props.header === "Инвентаризация") {
      return <button className="login">Вход</button>;
    } else if (props.header === "Территориальная схема") {
      return (
        <div className="buttons">
          <button className="login">Вход</button>
          <button className="view">Просмотр</button>
        </div>
      );
    } else
      return (
        <div className="buttons">
          <button className="login">Вход</button>
          <button className="signup">Регистрация</button>
        </div>
      );
  };

  return (
    <div className="card">
      <img width="40%" src={props.image} alt="" />
      <div className="text">
        <h3>{props.header}</h3>
        <p>{props.text}</p>
        {buttons()}
      </div>
    </div>
  );
};

export default Card;
