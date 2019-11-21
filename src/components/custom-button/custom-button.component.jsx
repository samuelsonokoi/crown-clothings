import React from "react";
import "./custom-button.styles.scss";

export const CustomButtonComponent = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};
