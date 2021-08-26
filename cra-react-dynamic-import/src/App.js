import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

async function getFruitFn(fruit) {
  const {default: FruitComp} = await import(`./fruits/${fruit}`);
  ReactDOM.render(<FruitComp />, document.getElementById('dynamic_component'))
  console.log("Render successful")
  return FruitComp;
}

const Fruit = ({fruit}) => {
  const clickHandler = async () => {
    const fruitFn = await getFruitFn(fruit)
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

function App() {
  return (
    <div className="App">
      <Component />
      <div id="dynamic_component"></div>
    </div>
  );
}

export default App;
