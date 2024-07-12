import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accor() {
  const [select, setSelect] = useState(null);

  console.log(select);

  function handleselection(getid) {
    setSelect(getid);
    // console.log(getid);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((datas) => (
            <div className="item" key={datas.id}>
              <div onClick={() => handleselection(datas.id)} className="title">
                <h1> {datas.question}</h1>
                <span>+</span>
              </div>
              {select === datas.id ? (
                <div className="content">{datas.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <diV> data not found</diV>
        )}
      </div>
    </div>
  );
}

export default Accor;
