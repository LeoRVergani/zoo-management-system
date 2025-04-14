import { Routes, Route, Link } from "react-router-dom";
import AnimalsPage from "./pages/AnimalsPage";
import CaresPage from "./pages/CaresPage";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Animais</Link> | <Link to="/cuidados">Cuidados</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AnimalsPage />} />
        <Route path="/cuidados" element={<CaresPage />} />
      </Routes>
    </div>
  );
}

export default App;
