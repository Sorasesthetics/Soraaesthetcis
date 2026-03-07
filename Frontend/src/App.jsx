import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from "./pages/Home"
import SplashScreen from "./pages/SplashScreen";
import Policies from "./pages/Policies";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
