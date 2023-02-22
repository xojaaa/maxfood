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
       
    
        {id:27, name: 'filadefla', price: '55 000', img: Foto2, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:28, name: 'filadefla', price: '55 000', img: Foto3, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:29, name: 'filadefla', price: '55 000', img: Foto4, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:30, name: 'filadefla', price: '55 000', img: Foto5, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:31, name: 'filadefla', price: '55 000', img: Foto6, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:32, name: 'filadefla', price: '55 000', img: Foto7, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:33, name: 'filadefla', price: '55 000', img: Foto8, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:34, name: 'filadefla', price: '55 000', img: Foto9, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:35, name: 'filadefla', price: '55 000', img: Foto10, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:36, name: 'filadefla', price: '55 000', img: Foto11, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:37, name: 'filadefla', price: '55 000', img: Foto12, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
        {id:38, name: 'filadefla', price: '55 000', img: Foto13, discription: 'lasos baliqlari zogara baliq', qunatitiy: 10, numbers: true},
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