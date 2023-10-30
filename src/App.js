import { useContext } from 'react';
import './App.css';
import { AuthContext, AuthProvider } from './Component/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Overview from './Pages/Overview';
import Shipments from './Pages/Shipment';
import Setting from './Component/Setting'
import Profile from './Component/Profile';
import LoginPage from './Pages/Login'
import ForgetPage from './Pages/ForgetPage';
import OtpPage from './Pages/OtpPage';
import ResetPage from './Pages/ResetPage';
import SignUp from './Component/Signup/SignUp';
import AllLoads from './Pages/Loads';
import Protectpages from './Component/ProtectPages';
import Create from './Component/Shipment/Create';
function App() {
  const authContext = useContext(AuthContext)
  return (
    <>
      <div className="App " id={authContext.theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route element={<Protectpages />}> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/loads" element={<AllLoads />} />
            <Route path="/shipment" element={<Shipments />} />
            <Route path="/create" element={<Create />} />
            {/* </Route> */}
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
