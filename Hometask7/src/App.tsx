
import UserFlow from "./Flow/UserFlow/UserFlow";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterInfo from './Components/CharacterInfo/CharacterInfo';
import AboutPage from "./pages/AboutPage/AboutPage";
import { CustomThemeProvider } from "./Providers/ThemeProvider/ThemeProvider";


const isProd = process.env.NODE_ENV === "production";

const Router = isProd ? HashRouter : BrowserRouter;
const App = () => {
    return (
        <CustomThemeProvider>
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
        </CustomThemeProvider>
    );
}
export default App;