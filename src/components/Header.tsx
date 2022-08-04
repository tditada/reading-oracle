import React from "react";

const HEADER_TEXT = "Oráculo Lector";

const Header = () => {
  return (
    <header>
      <h1>{HEADER_TEXT}</h1>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
    </header>
  );
};

export default Header;
