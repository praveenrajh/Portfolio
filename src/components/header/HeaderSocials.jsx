import React from "react";
import { BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__scocials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank"></a>
      <a href="https://twitter.com" target="_blank"></a>
    </div>
  );
};

export default HeaderSocials;
