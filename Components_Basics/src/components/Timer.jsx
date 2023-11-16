import { useState } from "react";

export default function Timer(props) {
    // array destructoring
    const [time, setTime] = useState(props.startTime); // pass initial state, cause state is initially undefined

    //const hookResult = useState();
    // hookResult -> масив с два елемента, резултат от useState
    // const stateValue = hookResult[0]; стойността на state-a
    // const setState = hookResult[1];   функция за промяна на state-a
    
    //let time = 0;

    setTimeout(() => {

        setTime(time + 1);
    }, 1000)

    return (
        <div>
            <h3>Timer</h3>
            <p>{time}</p>
        </div>
    )
}