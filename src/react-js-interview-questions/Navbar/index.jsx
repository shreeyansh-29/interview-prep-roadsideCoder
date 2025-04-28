import React from "react";
import "./index.css";

const index = () => {
  return (
    <div className="nav">
      <div className="item">
        <button className="l0-item">Products</button>
        <div className="dropdown">
          <ul>
            <li>
              <a href="/item-1">Item 1</a>
            </li>
            <li>
              <a href="/item-2">Item 2</a>
            </li>
            <li>
              <a href="/item-3">Item 3</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="item">
        <button className="l0-item">Rates</button>
        <div className="dropdown">
          <ul>
            <li>
              <a href="/item-1">Item 1</a>
            </li>
            <li>
              <a href="/item-2">Item 2</a>
            </li>
            <li>
              <a href="/item-3">Item 3</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="item">
        <button className="l0-item">Banking</button>
        <div className="dropdown">
          <ul>
            <li>
              <a href="/item-1">Item 1</a>
            </li>
            <li>
              <a href="/item-2">Item 2</a>
            </li>
            <li>
              <a href="/item-3">Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
