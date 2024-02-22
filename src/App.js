import './App.css';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Referentiels from './components/referentiels/Referentiels';
import DonneesEntree from './components/donnees-entree/DonneesEntree';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donnees" element={<DonneesEntree />} />
          <Route path="/referentiels" element={<Referentiels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
