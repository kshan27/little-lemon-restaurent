import React from "react";
import "./button.css";

const Button = ({ alt, onClick, style, children }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className="button"
      onClick={handleClick}
      alt={alt}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;