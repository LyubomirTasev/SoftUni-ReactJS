import React, { useState, useEffect } from "react";
import Starwars from "./Starwars";
import styles from "./App.module.css"
import "./App.css";

function App() {
  // let numbers = [1, 2, 3, 4, 5];
  // let doubledArr = numbers.map((number, index) => (
  //   <li key={index}>{number * 2}</li>
  // ));
  // let [doubled, setDoubled] = useState(doubledArr);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log('Mount component');
  }, []); // empty array -> prerenders only at the start

  useEffect(() => {
    //console.log(`Update component - ${numbers.length}`);
  }, [numbers]) // prerenders every time there is a change in the dependancy array

  const onClick = () => {
    setNumbers(oldState => oldState.slice(1)); // slice because it doesn't mutate the array => shift and pop are mutating functions
  };

  return (
    <div className={styles.app}>
      <Starwars/>
      <h3>Count: {count}</h3>
      <ul>
        {numbers.map((number, index) =>
         <li 
            key={index}
            className= {styles.listItem} // camelCase
            //className= {styles['list-item']} // if we wanna use the css syntax
            >
              {number * 2}
         </li>)}
      </ul>
      <button onClick={onClick}>Remove</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

export default App;
