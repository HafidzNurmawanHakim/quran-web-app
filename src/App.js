import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Doa from "./Pages/Doa";
import Hadits from "./Pages/Hadits";
import Footer from "./Components/Footer";
import Quran from "./Pages/Quran";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="quran" element={<Quran />} />
        <Route path="doa" element={<Doa />} />
        <Route path="hadits" element={<Hadits />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
