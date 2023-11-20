import { Route, Routes, HashRouter } from 'react-router-dom';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import DashboardPage from "./pages/DashboardPage";
import { CardSelectionPage } from "./pages/CardSelectionPage";
import AnalysisPage from "./pages/AnalysisPage";
import GameRecordPage from "./pages/GameRecordPage";
import SettingsPage from "./pages/SettingsPage";

export const App = () => {
  return (
    <HashRouter basename="/">
      <div className="font-sans">
        <div className="flex h-max">
          <Sidebar />
          <main className="flex-1 space-y-4 p-4">    
            <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/cardSelection" element={<CardSelectionPage/> } />
                <Route path="/gameRecord" element={<GameRecordPage/> } />
                <Route path="/analysis" element={<AnalysisPage/> } />
                <Route path="/settings" element={<SettingsPage/> } />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};
