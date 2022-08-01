import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App =() => {
  const expenses = [
    {
      id: 'e1',
      title: "Car insurance",
      date: new Date(),
      amount: "$300"
    },
    {
      id: 'e2',
      title: "Toilet Paper",
      date: new Date(),
      amount: "$300"
    },
    {
      id: 'e3',
      title: "New TV",
      date: new Date(),
      amount: "$300"
    },
    {
      id: 'e4',
      title: 'New Desk(Wooden)',
      date: new Date(),
      amount: "$300"
    }
  ];

  return (
    <Expenses items={expenses} />
  );
}

export default App;
