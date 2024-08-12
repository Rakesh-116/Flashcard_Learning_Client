import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Admin from "./admin/Admin.jsx";
import Insert from "./admin/Insert.jsx";
import Update from "./admin/Update.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/insert" element={<Insert />}/>
        <Route path="/admin/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
