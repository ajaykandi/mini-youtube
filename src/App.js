import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
