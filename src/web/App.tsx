import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import DashboardPage from "./pages/DashboardPage";
import { CardSelectionPage } from "./pages/CardSelectionPage";


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <HashRouter basename="/">
      <div className="font-sans">
        <div className="flex h-max">
          <Sidebar />
          <main className="flex-1 space-y-4 p-4">    
          <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/cardSelection" element={<CardSelectionPage/> } />
          </Routes>  
              
            
          </main>
        </div>
      </div>
    </HashRouter>
  );
};
