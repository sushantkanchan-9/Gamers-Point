import React, { useState } from "react";
import { BiDrink, BiSolidDrink } from "react-icons/bi";
import { FaCarCrash } from "react-icons/fa";

const PegPoint = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 389,
    quantity: 1,
  });

  const handleDrinkClick = () => {
    setDrink({
      ...drink,
      price: drink.price + 389,
      quantity: drink.quantity + 1,
    });
  };

  const handleDrinkMinus = () => {
    setDrink({
      ...drink,
      price: drink.price == 0 ? drink.price : drink.price - 389,
      quantity: drink.quantity - 1,
    });
  };

  return (
    <>
      <hr />
      <h3 style={{ marginTop: "30px" }}>
        Welcome To <br />
        <i style={{ color: "red" }}>The PegPoint</i>{" "}
        <BiSolidDrink
          size={40}
          color="aquamarine"
          style={{ transform: "rotate(20deg)" }}
        />
        <BiDrink
          size={40}
          color="pink"
          style={{ transform: "rotate(-10deg)" }}
        />
      </h3>
      <p>
        Your Drink : {drink.title}, <br />
        Peg count : {drink.quantity} <br />
        Price :{" "}
        {drink.price >= 900 ? (
          <b
            style={{
              borderRadius: "20px",
              color: "red",
            }}
          >
            {drink.price} ! dont drink and drive <FaCarCrash size="27" />
          </b>
        ) : (
          <b> {drink.price}</b>
        )}
      </p>
      {drink.price > 2000 ? (
        <>
          <b className="text-warning">ok that's enough for the day!</b>
          <br />
          <i>your otp for OLA- 6090</i>
        </>
      ) : drink.price >= 900 ? (
        <>
          <button onClick={handleDrinkClick} className="btn btn-outline-danger">
            Oops! be Careful
          </button>{" "}
          <button onClick={handleDrinkMinus} className="btn btn-outline-dark">
            -
          </button>
        </>
      ) : (
        <>
          <button onClick={handleDrinkClick} className="btn btn-dark">
            {" "}
            Buy drinks{" "}
          </button>{" "}
          <button onClick={handleDrinkMinus} className="btn btn-info">
            -
          </button>
        </>
      )}
      <hr />
    </>
  );
};

export default PegPoint;
