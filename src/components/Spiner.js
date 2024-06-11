import React from "react";
import loading from "../loader.gif";

const Spiner = (props) => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spiner;
