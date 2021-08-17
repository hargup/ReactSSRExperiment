import "core-js/stable";
import "regenerator-runtime/runtime";
// src/main.js
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

// ...

import React from "react";
import ReactDOM from "react-dom"
// import X from "./fruits/apple";

async function getFruitFn(fruit) {
  const {default: fruitFn} = await import(`./fruits/${fruit}`);
  return fruitFn;
}

const Fruit = ({fruit}) => {
  const clickHandler = async () => {
    const fruitFn = await getFruitFn(fruit)
    console.log("Calling Fruit fn")
    fruitFn();
  }
  return (<button onClick={clickHandler}>
    {fruit}
  </button>)
}

const Component = () => {
  return (<div>
    <Fruit fruit="apple" />
    <Fruit fruit="guava" />
    <Fruit fruit="orange" />
  </div>)
}

ReactDOM.render(<Component />, document)



// function component() {
//     const element = document.createElement('div');

//     const appleBtn = document.createElement('button');
//     appleBtn.innerHTML = 'Apple';
//     appleBtn.onclick = async () => {var fruitFn = await getFruitFn('apple'); console.log('calling fruit function'); fruitFn()};
//     element.appendChild(appleBtn);

//     const orangeBtn = document.createElement('button');
//     orangeBtn.innerHTML = 'Orange'
//     orangeBtn.onclick = async () => {var fruitFn = await getFruitFn('orange'); console.log('calling fruit fn'); fruitFn()};

//     element.appendChild(orangeBtn);


//     const guavaBtn = document.createElement('button');
//     guavaBtn.innerHTML = 'Guava'
//     guavaBtn.onclick = async () => {var fruitFn = await getFruitFn('guava'); console.log('calling fruit fn'); fruitFn()};

//     element.appendChild(guavaBtn);
  
//     return element;
//   }
