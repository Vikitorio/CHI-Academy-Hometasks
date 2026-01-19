import "./styles.css";
const Wrapper = (props) => {
    return (
        <div className="card">
            {props.title && <h2>{props.title}</h2>}
            {props.children}
        </div>
    )
}

export default Wrapper;