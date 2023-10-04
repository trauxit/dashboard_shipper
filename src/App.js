import { useContext } from 'react';
import './App.css';
import { AuthContext, AuthProvider } from './Component/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Setting from './Component/Setting'
import LoginPage from './Pages/Login'
import Protectpages from './Component/ProtectPages';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import ForgetPage from './Pages/ForgetPage';
import OtpPage from './Pages/OtpPage';
import ResetPage from './Pages/ResetPage';
import SignUp from './Component/Signup/SignUp';
import AllLoads from './Component/AllLoads';
function App() {
  const authContext = useContext(AuthContext)
  return (
    <>
      <div className="App " id={authContext.theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Protectpages />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/all-loads" element={<AllLoads />} />
            </Route>
            <Route path="/forget" element={<ForgetPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/reset-password" element={<ResetPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;
