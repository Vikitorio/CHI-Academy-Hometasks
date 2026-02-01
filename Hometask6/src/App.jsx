import Wrapper from "./Components/Wrapper/Wrapper.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu.jsx";
import UserFlow from "./Flow/UserFlow/UserFlow.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from './pages/CharactersPage/CharactersPage.jsx';
import CharacterInfo from './Components/CharacterInfo/CharacterInfo.jsx';
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import { ThemeProvider } from "./Providers/ThemeProvider/ThemeProvider.jsx";
const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserFlow />}>
                        <Route path="characters" element={<CharactersPage />}>
                            <Route path=":id" element={<CharacterInfo />}></Route>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;