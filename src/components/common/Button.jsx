import React from "react";
const Button = ({ children }) => {
  return (
    <button className="rounded-full text-white px-6 py-3 bg-orange-500">
      <div className="flex gap-2 items-center">{children}</div>
    </button>
  );
};

export default Button;
