import React from "react";

const Button = (props) => {
  const { isDisable, type, className, title, rightIcon, handleClick } = props;
  return (
    <button
      disabled={isDisable ?? false}
      type={type || "button"}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && <div className="relative w-6 h-6">{rightIcon}</div>}
    </button>
  );
};

export default Button;
