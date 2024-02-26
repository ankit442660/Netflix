import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

 export default function Movie(){
    return (
        <>
            <h1 className="heading_style">List of top 5 netflix webseries name</h1>

        {Sdata.map((val) => {
  
  return(
    <Card
     
     imgsrc={val.imgsrc}
     sname={val.sname}
     title={val.title}
     link={val.link}
     button={val.button}
     />);

 })}
        </>
    )
}