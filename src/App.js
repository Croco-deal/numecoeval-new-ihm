import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Inventaires from './components/inventaires/Inventaires';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventaires" element={<Inventaires />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
