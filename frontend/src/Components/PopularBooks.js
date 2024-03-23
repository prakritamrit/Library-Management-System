import React from "react";
import "./PopularBooks.css";
import BIT13 from "../photos/BIT 13.jpg"
import BIT14 from "../photos/BIT 14.jpg"
import BIT15 from "../photos/BIT 15.jpg"
import BIT16 from "../photos/BIT 16.jpg"
import BIT17 from "../photos/BIT 17.jpg"
import BIT18 from "../photos/BIT 18.jpg"
import BIT19 from "../photos/BIT 19.jpg"
import BIT20 from "../photos/BIT 20.jpg"
import BIT21 from "../photos/BIT 21.jpg"
import BIT22 from "../photos/BIT 22.jpg"
import BIT23 from "../photos/BIT 23.jpg"


function PopularBooks() {
  return (
    <div className="popularbooks-container">
      <h className="popularbooks-title">Popular Books</h>
      <div className="popularbooks">
        <div className="popularbook-images">
          <img
            className="popular-book"
            src={BIT13}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT14}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT15}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT16}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT17}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT18}
            alt=""
          ></img>
        </div>
        <div className="popularbook-images">
          <img
            className="popular-book"
            src={BIT19}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT20}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT21}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT22}
            alt=""
          ></img>
          <img
            className="popular-book"
            src={BIT23}
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PopularBooks;
