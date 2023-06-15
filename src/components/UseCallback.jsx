import React, { useState, useCallback } from 'react';

const Child = ({ onClick }) => {
  console.log('Child re-render');
  return <button onClick={onClick}>Click me</button>;
};

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <Child onClick={handleClick} />
//       <p>{count}</p>
//     </div>
  );
};
//In this example, the handleClick function is only re-created when the count state changes.
// This means that if the user clicks the button in the Child component, the Parent component will re-render,
// but the handleClick function will not be re-created. This can help improve the performance of your application, 
//especially if the function is expensive to create or if the Child component is re-rendering frequently.