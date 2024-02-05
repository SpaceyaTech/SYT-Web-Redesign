import React from "react";

const Levels = ({ resource }) => {
  const { level } = resource;
  return (
    <div className="flex gap-4">
      <button>{level}</button>
    </div>
  );
};

export default Levels;
