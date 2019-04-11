import React from "react";

import "./Backdrop.scss";
const Backdrop = props => {
  return <div className="Backdrop">{props.children}</div>;
};
export default Backdrop;
