import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UploadFile from "./Pages/UploadFile/UploadFile";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
