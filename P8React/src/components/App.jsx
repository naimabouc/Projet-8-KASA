import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./Logement";



function App (props) {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="logement/:id" element={<Logement/>} />
    </Routes>
      </BrowserRouter>
  );
};

export default App