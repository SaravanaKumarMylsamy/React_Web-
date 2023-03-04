import React from "react";
import MultiplePizzas from "../images/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Saravana's Pizza is a dish of South Indian Origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese and often various other ingredients such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat,ham etc... which is then baked at a high temperature, traditionally in a wood -fired oven.
          A small pizza is sometimes called a pizzeta. A person who makes pizza is known as a <b>pizzaiolo.</b>
        </p>
      </div>
    </div>
  );
}

export default About;