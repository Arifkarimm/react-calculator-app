import React from "react";

const SingleButton = ({ onClick, label, value }) => {
  return (
    <div onClick={onClick} className="button" value={value}>
      {label}
    </div>
  );
};

export default SingleButton;
