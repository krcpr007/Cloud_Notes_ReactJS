import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-success mt-5" role="alert">
        {props.message} heheheh i'm Alert 
      </div>
    </div>
  );
};

export default Alert;
