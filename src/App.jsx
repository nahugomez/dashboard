import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes/ApplicationRouter";
import ApplicationSidebar from "./global/ApplicationSidebar";
import { Box, CssBaseline } from "@mui/material";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <CssBaseline />
                <Box display={"flex"} height={"100vh"}>
                    <ApplicationSidebar />
                    <Box padding={"1rem"}>
                        <ApplicationRouter />
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
