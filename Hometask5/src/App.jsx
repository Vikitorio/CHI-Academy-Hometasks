import Wrapper from "./Components/Wrapper/Wrapper.jsx";
import Counter from "./Components/Counter/Counter.jsx";

const App = () => {
    return (
        <Wrapper title="Лічильники">
            <Counter counterTitle="Default Counter"/>
            <Counter counterTitle="Counter With Initial Value" initialValue={5}/>
        </Wrapper>

    );
}
export default App;