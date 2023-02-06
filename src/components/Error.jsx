import { useState, useEffect } from "react";

const Error = ({mensaje}) => {
  return (
    <div>
      <div className="bg-red-800 text-white text-center uppercase p-3 mb-3 rounded-xl">
        <p>{mensaje}</p>
      </div>
    </div>
  );
};

export default Error;
