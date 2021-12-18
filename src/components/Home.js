import React from "react";

import Notes from "./Notes";
export const Home = (props) => {
  const { showAlert } = props;
  return (
    <div className="">
      <Notes showAlert={showAlert} />
    </div>
  );
};
