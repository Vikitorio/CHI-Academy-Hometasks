import { Children, createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const changeTheme = (newTheme) => {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
