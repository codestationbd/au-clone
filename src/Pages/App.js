import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Dashboard from "./Dashboard/Sections/Dashboard/Dashboard";

function App() {
    return <>
    <Dashboard/>
    </>
    
    
    // <Router>
    //     <Routes>
    //         <Route path="/" element={<Homepage />} />
    //     </Routes>
    //     <Routes>
    //         <Route path="/dashboard" element={<Dashboard/>} />
    //     </Routes>
    // </Router>;
}

export default App;
