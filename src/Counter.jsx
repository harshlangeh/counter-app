import React, { useState } from "react";
import MyButton from "./button";


function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prev) => prev + 3);
    };

    const decrementCount = () => {
        setCount((prev) => prev - 3);
    }


    return (
        <div>    
        <p>Count: {count}</p>
        <MyButton text="Increment" click={incrementCount}/>
        <MyButton text="Decrement" click={decrementCount}/>
        </div>
    )


}

export default Counter;