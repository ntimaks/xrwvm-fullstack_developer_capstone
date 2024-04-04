import LoginPanel from "./components/Login/Login";
import Register from './components/Register/Register'; // Adjust the path as necessary

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} /> {/* Updated this line */}
    </Routes>
  );
}

export default App;
