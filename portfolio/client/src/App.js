import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header_1 from "./components/header/Header_1";
import Main from "./components/main/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/so-hee-portfolio" element={<Header_1 />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
