import { ReactElement } from "react";
import "./styles.css";

interface WrapperProps {
    title: string;
    children: Array<ReactElement>;
}
const Wrapper = (props:WrapperProps) => {
    return (
        <div className="card">
            {props.title && <h2>{props.title}</h2>}
            {props.children}
        </div>
    )
}

export default Wrapper;