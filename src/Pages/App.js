import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";

function App() {
    return <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>;
}

export default App;
