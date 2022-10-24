import React, {useState} from "react";
import './CounterItem.css';

const CounterItem = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setValue(value - 1);
        setCount(count + 1);
    }    

    return (
        <article>
            <h3>Task 1: A counter</h3>
            <div className="counter-item__buttons">
                <button onClick={handleIncrement}>+</button>
                <div className="counter-item__value">{value}</div>
                <button onClick={handleDecrement}>-</button>
            </div>
            <p>Number of times clicked: {count}</p>
        </article>
    );
}

export default CounterItem;