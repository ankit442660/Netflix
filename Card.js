import  React from "react";
                                                                  
export default function Card({imgsrc,sname ,title,link,button}){
    return(
        <>
        <div className="cards">
          <div className="card">
            <img src={imgsrc} alt="mypic" className="card_img"/>
            <div className="card_info">
              <span className="card_category">{sname}</span>
              <h3 className="card_title">{title} </h3>
              <a href= {link} target="_blan">
                <button>{button} </button>
              </a>
            </div>
      
          </div>
        </div>
        </>

    );
}
