import React from 'react';
import pitpeperoni from "../icon/13.png";
import pitmaster from "../icon/14.png";
import pitmargarita from "../icon/15.png";
import xachapuri from "../icon/16.png";
import pitqazili from "../icon/17.png";
import pitbaron from "../icon/18.png";

import "../css/all.css";
function Pitsa() {


    const barcha = [
        {id:21, name: 'pitsa pepperoni', price: '50 000', img: pitpeperoni},
        {id:22, name: 'pitsa pitsa master food', price: '60 000', img: pitmaster},
        {id:23, name: 'pitsa margarita', price: '50 000', img: pitmargarita},
        {id:24, name: 'xachapuri', price: '50 000', img: xachapuri},
        {id:25, name: 'pitsa qazili', price: '60 000', img: pitqazili},
        {id:26, name: 'pitsa baron', price: '60 000', img: pitbaron},
    
      ]
    return ( 
        <>
           <div className="container mt-5">
       <h1 className="allFoodText mt-5">Pitsa taomlar</h1>
        <div className="col-6 offset-3">
         
        </div>
      <div className="row ">
       {barcha.map((item, index) => (
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="box">
          <a href={item.img}>
          <img src={item.img} className="burgerFoto" alt="" />
          </a>

          <div className="food-footer">
            <div className="foodName">
              <h5>{item.name}</h5>
              <h5 className="pt-2">{item.name2}</h5>
              <h6>{item.discription}</h6>
            </div>
            <div className="foodPrice">

            <p>{item.price}<sub>so'm</sub></p>
            <p>{item.price2} {item.faluta > false ? 'so\'m' : " " }</p>
            <p>{item.qunatitiy} {item.numbers > false ? 'шт' : " "}</p>
            </div>
          </div>
        </div>
      </div>
      ))
       }


        
       
        
      </div>
    </div>
        </>
     );
}

export default Pitsa;