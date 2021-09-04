import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Sdata from "./Sdata";


function cards(value){
  console.log(value);
  return(
    <Card imgsrc={value.imgsrc}
     sname={value.name} 
     title={value.title}
     link={value.link} />
  );
}
function Card(props){
  console.log(props);
  return(
<div className="block">
  <div className="card">
    <img src={props.imgsrc} alt="mypic" className="card_image"/>
    <div className="card_info">
      <span className="card__category">{props.title}</span>
      <h3 className="card_title">{props.sname}</h3>
      <a href={props.link} target="_blank">
        <button color="white">WATCH NOW</button>
      </a>
    </div>
  </div>
</div>);
}


ReactDom.render(<>
<h1 className="heading">India's top series</h1>
<hr></hr>
{Sdata.map(cards)}</>
 ,document.getElementById('root'));