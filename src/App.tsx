import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MainRoutes } from "./components/helpers/MainRoutes";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route element={<MainRoutes component={Dashboard} />}>
              <Route element={<HomePage />} path="/" />
              <Route element={<FavoritePage />} path="/favorite" />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
