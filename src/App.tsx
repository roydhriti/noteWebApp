
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ProfilePage from "./page/ProfilePage";
import { NotePage } from "./page/NotePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/note" element={<NotePage />} />




      </Routes>
    </Router>
  );
};

export default App;
