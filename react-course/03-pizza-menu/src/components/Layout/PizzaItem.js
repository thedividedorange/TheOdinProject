import React from "react";
import "./PizzaItem.css";

export default function PizzaItem({ pizzaObj }) {
  return (
    <div id="pizzaItem" className="d-flex p-2 gap-3">
      <div className="d-flex flex-shrink-0">
        <img
          src={pizzaObj.photoName}
          className={`img-fluid rounded ${
            pizzaObj.soldOut ? "outOfStock" : null
          }
          `}
          alt={pizzaObj.pictureAlt}
        />
      </div>
      <div
        id="right"
        className="d-flex flex-column justify-content-start flex-grow-1"
      >
        <h2 className="fs-3 fw-bold">{pizzaObj.name}</h2>
        <p className="fs-5">{pizzaObj.ingredients}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fs-4 fw-bold">${pizzaObj.price}</span>
          <span
            className={`badge ${pizzaObj.soldOut ? "bg-danger" : "bg-success"}`}
          >
            {pizzaObj.soldOut ? "Sold Out" : "Available"}
          </span>
        </div>
      </div>
    </div>
  );
}
