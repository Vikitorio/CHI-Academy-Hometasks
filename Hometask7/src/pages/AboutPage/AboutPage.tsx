import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider/ThemeProvider";

const AboutPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Box component="section" sx={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: theme == "light" ? "#ecf0f1" : "#393939",
                color: theme == "light" ? "black" : "#eaebec"

            }}>
            <Typography variant="body1">
                This is about website page.
            </Typography>
        </Box>

    );
}

export default AboutPage;