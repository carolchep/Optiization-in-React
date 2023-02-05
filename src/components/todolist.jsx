import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};