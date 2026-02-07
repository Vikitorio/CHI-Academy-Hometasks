
import { Outlet } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import "./styles.css"
import { Box, Container } from "@mui/material";
import Header from "../../Components/Header/Header";
const UserFlow = () => {
    return (
        <>
            <Header />
            <div className="user-flow">
                    <NavigationMenu />
                <div style={{ flex: "1", overflowY:"auto" }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default UserFlow;