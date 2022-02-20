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
      <ExpenseItem name={expenses[0].name} price={expenses[0].price} date={new Date()}></ExpenseItem>
    </div>
  );
}

export default App;
