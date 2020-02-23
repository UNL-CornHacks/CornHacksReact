import React from "react";
import "./RotationEffect.css";

const RotationEffect = ({ children }) => (
  <div>
    <div className="infinite-rotation-y bounce">{children}</div>
    <div className="shadow" />
  </div>
);

export default RotationEffect;
