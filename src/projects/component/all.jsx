import React, { useEffect, useState } from "react";

import kfc from "../icon/19.png";
import clubSandvich from "../icon/20.png";
import konkamob from "../icon/21.png";
import fri from "../icon/22.png";
import lavkombo1 from "../icon/24.png";
import chizkombo1 from "../icon/25.png";
import lavqoshtli from "../icon/max food 1.png";
import lavsirli from "../icon/2.png";
import lavtovuqli from "../icon/3.png";
import lavkaklitli from "../icon/4.png";
import blyuda from "../icon/5.png";
import donar from "../icon/6.png";
import gamburger from "../icon/7.png";
import chizburger from "../icon/8.png";
import hotdog from "../icon/9.png";
import hotdogmix from "../icon/11.png";
import haggi from "../icon/12.png";
import hodogsirli from "../icon/10.png";
import pitpeperoni from "../icon/13.png";
import pitmaster from "../icon/14.png";
import pitmargarita from "../icon/15.png";
import xachapuri from "../icon/16.png";
import pitqazili from "../icon/17.png";
import pitbaron from "../icon/18.png";

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

import Aos from "aos";
import "aos/dist/aos.css";
import "../css/all.css";
function All() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  const barcha = [
    { id: 1, name: "kfc", price: "30 000", img: kfc },
    { id: 2, name: "culub sandwich", price: "30 000", img: clubSandvich },
    { id: 3, name: "non kabob", price: "30 000", img: konkamob },
    { id: 4, name: "fri", price: "10 000", img: fri },
    { id: 5, name: "lavash kombo", price: "35 000", img: lavkombo1 },
    { id: 6, name: "chizburger kombo", price: "35 000", img: chizkombo1 },
    {
      id: 7,
      name: "lavash go'shtli",
      name2: "lavash go'shtli",
      price: "20 000",
      price2: "30 000",
      img: lavqoshtli,
      faluta: true,
    },
    {
      id: 10,
      name: "lavash sirli",
      name2: "lavash sirli",
      price: "27 000",
      price2: "30 000",
      img: lavsirli,
      faluta: true,
    },
    {
      id: 11,
      name: "lavash tovuqli",
      name2: "lavash tovuqli",
      price: "20 000",
      price2: "25 000",
      img: lavtovuqli,
      faluta: true,
    },
    {
      id: 12,
      name: "lavash katletli",
      name2: "lavash katletli",
      price: "25 000",
      price2: "30 000",
      img: lavkaklitli,
      faluta: true,
    },
    { id: 13, name: "donar blyuda", price: "35 000", img: blyuda },
    {
      id: 14,
      name: "donar",
      name2: "donar",
      price: "20 000",
      price2: "35 000",
      img: donar,
      faluta: true,
    },
    { id: 15, name: "gamburger", price: "25 000", img: gamburger },
    { id: 16, name: "chizburger", price: "30 000", img: chizburger },
    {
      id: 17,
      name: "hot-dog",
      name2: "hot-dog",
      price: "10 000",
      price2: "14 000",
      img: hotdog,
      faluta: true,
    },
    {
      id: 18,
      name: "hot dog mix",
      name2: "hot dog qazili",
      price: "20 000",
      price2: "25 000",
      img: hotdogmix,
      faluta: true,
    },
    {
      id: 19,
      name: "haggi",
      name2: "haggi",
      price: "25 000",
      price2: "30 000",
      img: haggi,
      faluta: true,
    },
    { id: 20, name: "hot dog sirli", price: "16 000", img: hodogsirli },

    { id: 21, name: "pitsa pepperoni", price: "50 000", img: pitpeperoni },
    {
      id: 22,
      name: "pitsa pitsa master food",
      price: "60 000",
      img: pitmaster,
    },
    { id: 23, name: "pitsa margarita", price: "50 000", img: pitmargarita },
    { id: 24, name: "xachapuri", price: "50 000", img: xachapuri },
    { id: 25, name: "pitsa qazili", price: "60 000", img: pitqazili },
    { id: 26, name: "pitsa baron", price: "60 000", img: pitbaron },

    {
      id: 27,
      name: "Sushi",
      lastname: "филаделфия",
      price: "55 000",
      img: Foto2,
      discription: "лосось, огурец, кримета",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 28,
      name: "Sushi",
      lastname: "сдинамит",
      price: "45 000",
      img: Foto3,
      discription: "кримета, огурец, крап",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 29,
      name: "Sushi",
      lastname: "дракон",
      price: "60 000",
      img: Foto4,
      discription: "кримета, тобико, огурец, угорь",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 30,
      name: "Sushi",
      lastname: "калифорния ред",
      price: "45 000",
      img: Foto5,
      discription: "кримета, огурец, тобико, крап",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 31,
      name: "Sushi",
      lastname: "каппа маки",
      price: "50 000",
      img: Foto6,
      discription: "кримета, лосось",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 32,
      name: "Sushi",
      lastname: "зби маки",
      price: "50 000",
      img: Foto7,
      discription: "кримета, угорь, кунжут",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 33,
      name: "Sushi",
      lastname: "Кани хотто",
      price: "45 000",
      img: Foto8,
      discription: "лосось, кримета",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 34,
      name: "Sushi",
      lastname: "Киотто темпура",
      price: "60 000",
      img: Foto9,
      discription: "кримета, угорь, лосось, огурец,",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 35,
      name: "Sushi",
      lastname: "Сяки темпура",
      price: "45 000",
      img: Foto10,
      discription: "кримета, огурец, угорь, кунжут",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 36,
      name: "Sushi",
      lastname: "каки Хотто",
      price: "45 000",
      img: Foto11,
      discription: "кримета, огурец, лосось",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 37,
      name: "Sushi",
      lastname: "америка темпура",
      price: "50 000",
      img: Foto12,
      discription: "кримета, жареные лосось, огурец",
      qunatitiy: 10,
      numbers: true,
    },
    {
      id: 38,
      name: "Sushi",
      lastname: "филаделфия спешл",
      price: "45 000",
      img: Foto13,
      discription: "кримета, тобико, огурец, угорь",
      qunatitiy: 10,
      numbers: true,
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="allFoodText mt-5">Barcha taomlar</h1>
      <div className="col-md-6 mx-auto mt-3">
        <input
          type="text"
          className="form-control inputs"
          placeholder="qidiruv"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="row ">
        {barcha
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-4 col-xl-4 foodcard"
              data-aos="zoom-in"
            >
              <div className="box">
                <a href={item.img}>
                  <img src={item.img} className="burgerFoto" alt="" />
                </a>

                <div className="food-footer">
                  <div className="foodName">
                    <h5 className="nameFood">{item.name}</h5>
                    <h5 className="pt-2 nameFood">{item.name2}</h5>
                    <h6 className="foodDiscription">
                      {" "}
                      <b className="text-success ">{item.lastname}</b>{" "}
                      {item.discription}
                    </h6>
                  </div>
                  <div className="foodPrice">
                    <p>
                      {item.price}
                      <sub>so'm</sub>
                    </p>
                    <p>
                      {item.price2} {item.faluta > false ? "so'm" : " "}
                    </p>
                    <p>
                      {item.qunatitiy} {item.numbers > false ? "шт" : " "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default All;
