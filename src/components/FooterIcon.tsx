import React from "react";

const FooterIcon = ({ children, background = "bg-blue-600" }) => {
  return (
    <a
      href=""
      className={`${background} p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
    >
      {children}
    </a>
  );
};
export default FooterIcon;
