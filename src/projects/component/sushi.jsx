import React from 'react';

import Foto2 from "../icon/26.png";
import Foto3 from "../icon/27.png";
import Foto4 from "../icon/28.png";
import Foto5 from "../icon/29.png";
import Foto6 from "../icon/30.png";
import Foto7 from "../icon/31.png";
import Foto8 from "../icon/32.png";
import Foto9 from "../icon/33.png";
import Foto10 from "../icon/34.png";
import Foto11 from "../icon/35.png";
import Foto12 from "../icon/36.png";
import Foto13 from "../icon/37.png";



function Sushi() {


    const barcha = [
       
    
      {id:27,name: 'Sushi', lastname: 'филаделфия', price: '55 000', img: Foto2, discription: 'лосось, огурец, кримета', qunatitiy: 10, numbers: true},
      {id:28,name: 'Sushi', lastname: 'сдинамит', price: '45 000', img: Foto3, discription: 'кримета, огурец, крап', qunatitiy: 10, numbers: true},
      {id:29,name: 'Sushi', lastname: 'дракон', price: '60 000', img: Foto4, discription: 'кримета, тобико, огурец, угорь', qunatitiy: 10, numbers: true},
      {id:30,name: 'Sushi', lastname: 'калифорния ред', price: '45 000', img: Foto5, discription: 'кримета, огурец, тобико, крап', qunatitiy: 10, numbers: true},
      {id:31,name: 'Sushi', lastname: 'каппа маки', price: '50 000', img: Foto6, discription: 'кримета, лосось', qunatitiy: 10, numbers: true},
      {id:32,name: 'Sushi', lastname: 'зби маки', price: '50 000', img: Foto7, discription: 'кримета, угорь, кунжут', qunatitiy: 10, numbers: true},
      {id:33,name: 'Sushi', lastname: 'Кани хотто', price: '45 000', img: Foto8, discription: 'лосось, кримета', qunatitiy: 10, numbers: true},
      {id:34,name: 'Sushi', lastname: 'Киотто темпура', price: '60 000', img: Foto9, discription: 'кримета, угорь, лосось, огурец,', qunatitiy: 10, numbers: true},
      {id:35,name: 'Sushi', lastname: 'Сяки темпура', price: '45 000', img: Foto10, discription: 'кримета, огурец, угорь, кунжут', qunatitiy: 10, numbers: true},
      {id:36,name: 'Sushi', lastname: 'каки Хотто', price: '45 000', img: Foto11, discription: 'кримета, огурец, лосось', qunatitiy: 10, numbers: true},
      {id:37,name: 'Sushi', lastname: 'америка темпура', price: '50 000', img: Foto12, discription: 'кримета, жареные лосось, огурец', qunatitiy: 10, numbers: true},
      {id:38,name: 'Sushi', lastname: 'филаделфия спешл', price: '45 000', img: Foto13, discription: 'кримета, тобико, огурец, угорь', qunatitiy: 10, numbers: true},
      ]
    return ( 
    <>
    <div className="container mt-5">
       <h1 className="allFoodText mt-5">Sushi taomlar</h1>
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

export default Sushi;