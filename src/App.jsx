import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import Insert from "./admin/InsertFlashCard.jsx";
import Update from "./admin/UpdateFlashCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/insert" element={<Insert />}/>
        <Route path="/admin/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
