import logo from './logo.svg';
import './App.css';

function marsGreeting(){
  return "hi terran";
}

function Ship(){
  return (<h1>Component Ship X</h1>);
}

function App() {

  const place = "Mars";

  const enviroment = { color: 'red', shape: 'spheric' };

  const people = [
    'Martian A1', 'Martian B2'
  ];

  const rocks = [
    {
      number: 1,
      name: "rocky"
    },
    {
      number: 2,
      name: "stone"
    }
  ]

  const goodPeople = people.map(function(name){return <br>{name}</br>;});

  return (
    <div>
      <h1>Hola {place}</h1>
      <h2>Shape: {enviroment.shape}</h2>
      <h2>Color: {enviroment.color}</h2>
      <h2>Says: {marsGreeting()}!</h2>
      <h2>Good people:</h2> <ul>{people.map(function(name){return <li>{"nice "+name}</li>;})}</ul>
      <h2>Rocks:</h2> <ul>{rocks.map(function(rock){return <li>{"hi, i am rock # "+rock.number+" and my name is '"+rock.name+"'"}</li>;})}</ul>
      <Ship />
    </div>
  );
}

export default App;
