import React from "react";

const Input = ({ placeholder, className, type }) => {
  return (
    <>
      {type === "text" ? (
        <input
          type="text"
          placeholder={placeholder}
          className={`p-2 border border-gray-300 rounded ${className}`}
        />
      ) : type === "password" ? (
        <input
          type="password"
          placeholder={placeholder}
          className={`p-2 border border-gray-300 rounded ${className}`}
        />
      ) : null}
    </>
  );
};

export default Input;
