import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from "react";

import { ThemeContext } from "../../Providers/ThemeProvider/ThemeProvider.jsx";
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <AppBar position="fixed" elevation={0} sx={{backgroundColor:"#27ae60"}} >
            <Toolbar variant="dense"
                sx={{
                    minHeight: "35px",
                    height: "35px",
                    px: 1,
                    justifyContent: "end",
                }}
            >
                <Box>
                    Mode:
                    {theme == "light" && <IconButton onClick={() => { setTheme("dark") }}>
                        <LightModeIcon sx={{ color: '#b2dfdb' }} />
                    </IconButton>
                    }
                    {theme == "dark" &&
                        <IconButton onClick={() => { setTheme("light") }}>
                            <ModeNightIcon sx={{ color: '#b2dfdb' }} />
                        </IconButton>}

                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;