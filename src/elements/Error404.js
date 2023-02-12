import React from "react";
import { Link } from "react-router-dom";
import "../style/Error404.css";

const Error404 = () => {
  return (
    <div className="body">
      <div className="page-container">
        <div className="page-not-found">
          <span>PAGE</span>
          <span>
            <div className="span404">404</div>
            NOT
          </span>
          <span>FOUND</span>
        </div>
      </div>
      <div className="home-btn">
        <Link to="/">
          <button className="volver">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
