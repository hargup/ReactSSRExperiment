import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
