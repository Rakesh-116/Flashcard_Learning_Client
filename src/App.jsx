import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminDashboard from "./admin/adminDashboard.jsx";
import Insert from "./admin/insertFlashCard.jsx";
import Update from "./admin/updateFlashCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/insert" element={<Insert />}/>
        <Route path="/admin/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
