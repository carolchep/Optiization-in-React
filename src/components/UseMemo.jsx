import React, { useState, useMemo } from 'react';

const List = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, prevItems.length + 1]);
  };

  const expensiveComputation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i];
    }
    return sum;
  }, [items]);

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};


//In this example, the expensiveComputation value is only re-computed when the items state changes. 
//This means that if the user clicks the button that increments the count, 
//the value of expensiveComputation will not be re-computed, even though the component is re-rendering. 
//This can help improve the performance of your application, especially if the calculation is expensive.