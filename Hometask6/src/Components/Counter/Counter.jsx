import { useState } from "react";
import "./styles.css";
const Counter = (props) => {
    const [counter, setCounter] = useState(props.initialValue || 0);
    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    }
    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div className="counter__container">
            {props.counterTitle &&
                <h3>
                    {props.counterTitle}
                </h3>}
            <div className="counter__controls">
                <button className="decrease_btn" onClick={decreaseCounter}>{"<"}</button>
                <p className="counter__value">{counter}</p>
                <button className="increase_btn" onClick={increaseCounter}>{">"}</button>
            </div>
        </div>
    );
}

export default Counter;