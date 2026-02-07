import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, List, ListItemButton } from '@mui/material';


const links = [
    { text: "Charactes", path: "characters" },
    { text: "About", path: "about" }
]
const NavigationMenu = () => {
    const navigate = useNavigate();
    return (
        <div className="navigation__container">
            <Box className="navigation__menu">
                <List >
                    {links.map((item) => {
                        return (<ListItemButton divider={true}   key={item.text} onClick={() => navigate(item.path)}>{item.text}</ListItemButton>)
                    })}
                </List>
            </Box>
        </div>
    );
}

export default NavigationMenu;