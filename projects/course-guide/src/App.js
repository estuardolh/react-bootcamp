import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      name: 'Apple',
      price: 10.0
    },
    {
      name: 'Pineapple',
      price: 11.0
    },
    {
      name: 'Banana',
      price: 2.0
    }
  ];

  return (
    <div className="App">
      <ExpenseItem name={expenses[0].name} price={expenses[0].price}></ExpenseItem>
      <ExpenseItem name={expenses[1].name} price={expenses[1].price}></ExpenseItem>
      <ExpenseItem name={expenses[2].name} price={expenses[2].price}></ExpenseItem>
    </div>
  );
}

export default App;
