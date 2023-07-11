import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes/ApplicationRouter";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <ApplicationRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
