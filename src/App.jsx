import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes/ApplicationRouter";
import ApplicationSidebar from "./global/ApplicationSidebar";
import Navbar from "./global/Navbar";
import { Box, CssBaseline } from "@mui/material";
import "./App.css";

function App() {
    return (
        <Box sx={{ backgroundColor: "#F3F6F9" }}>
            <BrowserRouter>
                <CssBaseline />
                <Navbar />
                <Box display={"flex"} sx={{ minHeight: "calc(100vh - 3rem)" }}>
                    <ApplicationSidebar />
                    <Box padding={"1rem"} margin={"0.5rem"} borderRadius={"1rem"} width={"100%"} sx={{ backgroundColor: "#FFF" }}>
                        <ApplicationRouter />
                    </Box>
                </Box>
            </BrowserRouter>
        </Box>
    );
}

export default App;
