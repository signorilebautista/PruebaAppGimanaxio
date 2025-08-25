import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DniPage from "./pages/DniPage";
import MenuPage from "./pages/MenuPage";
import ReservaPage from "./pages/ReservaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DniPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reserva" element={<ReservaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
