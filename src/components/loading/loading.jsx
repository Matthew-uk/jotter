import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="main">
        <div className="balls balls-1">
          <div className="ball ball--1"></div>
          <div className="ball ball--2"></div>
          <div className="ball ball--3"></div>
          <div classname="ball ball--4"></div>
        </div>
        <div className="balls balls-2">
          <div className="ball ball--1"></div>
          <div className="ball ball--2"></div>
          <div className="ball ball--3"></div>
          <div className="ball ball--4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
