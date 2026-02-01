import Wrapper from "./Components/Wrapper/Wrapper.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu.jsx";
import UserFlow from "./Flow/UserFlow/UserFlow.jsx";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from './pages/CharactersPage/CharactersPage.jsx';
import CharacterInfo from './Components/CharacterInfo/CharacterInfo.jsx';
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import { ThemeProvider } from "./Providers/ThemeProvider/ThemeProvider.jsx";


const isProd = process.env.NODE_ENV === "production";

const Router = isProd ? HashRouter : BrowserRouter;
const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<UserFlow />}>
                        <Route path="characters" element={<CharactersPage />}>
                            <Route path=":id" element={<CharacterInfo />}></Route>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
export default App;