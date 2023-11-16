import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementonClickHandler = () => {
        setCount(count + 1); // oldValue => oldValue + 1
    }
    const clearCounterHandler = () => {
        setCount(0);
    }

    // let warning = '';

    // if(count < 0) {
    //     warning = <p>Go back please</p>
    // }

    return (
        <div>
            <h3>Counter</h3>

            {count < 0
                ? <p>Invalid count</p>  // in case of if/else condition
                : <p>Valid count</p>
            }
    
            {count == 0 && <p>Please start incrementing</p>}
            
            <p>Count: {count}</p>

            <button disabled = {count < 0} onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={incrementonClickHandler}>+</button>
        </div>
    )
}