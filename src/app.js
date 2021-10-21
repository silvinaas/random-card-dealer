/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let palos = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function getRandom(number) {
    return Math.floor(Math.random() * number);
  }
  let valorAleatorio = numbers[getRandom(13)];
  let paloAleatorio = palos[getRandom(4)];
  console.log(valorAleatorio, paloAleatorio);
  let palo1 = document.querySelector(".palo");
  let numero = document.querySelector(".numerito");
  let palo2 = document.querySelector(".palo2");
  let heart = document.querySelector(".heart");
  let heart1 = document.querySelector(".heart1");
  let heart2 = document.querySelector(".heart2");

  if (paloAleatorio === "♥") {
    palo1.setAttribute("class", "heart");
    palo2.setAttribute("class", "heart");
    heart1.innerHTML = paloAleatorio;
    heart2.innerHTML = paloAleatorio;
    numero.innerHTML = valorAleatorio;
  } else if (paloAleatorio === "♦") {
    palo1.setAttribute("class", "heart");
    palo2.setAttribute("class", "heart");
    heart1.innerHTML = paloAleatorio;
    heart2.innerHTML = paloAleatorio;
    numero.innerHTML = valorAleatorio;
  } else {
    palo1.innerHTML = paloAleatorio;
    palo2.innerHTML = paloAleatorio;
    numero.innerHTML = valorAleatorio;
  }
};
