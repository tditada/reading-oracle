import React from "react";
import styled from "styled-components";
import "./style.css";

// This book loader animation is from https://codepen.io/aaroniker/pen/zYOewEP

const StyledLoaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const BookLoader = () => {
  return (
    <StyledLoaderContainer>
      <div className="book">
        <div className="inner">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </StyledLoaderContainer>
  );
};

export default BookLoader;
