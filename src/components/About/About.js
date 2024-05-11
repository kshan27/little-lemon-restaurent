import React from "react";
import RestaurantImage from "assets/cafe-des-amis.jpg";
import FoodServing from "assets/restaurent-service.jpg";
import "./About.css";

function About() {
    return (
        <div className="about">
          <div className="about-text">
            <h1 className="about-title">Little Lemon</h1>
            <h2 className="about-subtitle">Chicago</h2>
            <p className="about-description">
              Chicago is peaceful restaurant to all kind of food lovers. It serves customizable and healthy recepies.
              We provide cool ambience and spacious tables and great menu to fulfill customers.
              The Little Lemon Chicago restaurent has special arrangement for Birthdays, Engagements and Marriage paries.
              Find us in the heart of Chicago for an unforgettable experience.
            </p>
          </div>
          <img
            className="about-image-bruchetta"
            src={RestaurantImage}
            alt="Restarurant Image"
            height={200}
            width={200}
          />
          <img
            className="about-image-restaurant"
            src={FoodServing}
            alt="Food in restaurent"
            height={200}
            width={200}
          />
        </div>
      );
    };

export default About;