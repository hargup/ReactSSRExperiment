import React from "react";
import ReactDOM from "react-dom"

const Component = () => {
  return (<div>
  Hello React
  </div>)
}

ReactDOM.render(<Component />, document)

// async function getFruitFn(fruit) {
//   const {default: fruitFn} = await import(`./fruits/${fruit}`);
//   return fruitFn;
// }

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
