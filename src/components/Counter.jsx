// This component shows a number and three button to change it.

// 'usestate' must be imported from react before we can use it.
// usestate Hook- It is used to store and update the value in a React component
import { useState } from "react";

function Counter(){
    // useState(0) creates a piece of state starting at 0
    // 'count' is the current value
    // 'setCount' is the function we call to change the value
    const [count, setCount] = useState(0);

    //This function runs when the 'Add1' button is clicked
    function handleAdd(){
        setCount(count+1)
    }

    //This function runs when the 'Substract1' button is clicked
    function handleSubtract(){
        setCount(count-1)
    }

    //This function reset the count back to 0
    function handleReset(){
        setCount(0);
    }
}

return(
    <div>
        <h2>Counter</h2>

        {/* Display the current value of count */}
        <p>Current Count:{count}</p>

        {/* Each button calls a different function when it is clicked */}
        <button onClick={handleAdd}>Add 1</button>
        <button onClick={handleSubtract}>Subtract 1</button>
        <button onClick={handleReset}>Reset</button>
    </div>
)

export default Counter;