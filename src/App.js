import { useContext, useEffect } from 'react';
import './App.css';
import { AuthContext, AuthProvider } from './Component/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Overview from './Pages/Overview';
import Shipments from './Pages/Shipment';
import Update from './Component/Update'
import Profile from './Component/Profile';
import LoginPage from './Pages/Login'
import ForgetPage from './Pages/ForgetPage';
import OtpPage from './Pages/OtpPage';
import ResetPage from './Pages/ResetPage';
/* import SignUp from './Component/Signup/SignUp';
 */import AllLoads from './Pages/Loads';
import Protectpages from './Component/ProtectPages';
import Create from './Component/Shipment/Create';
import { useDispatch } from 'react-redux';
import { login } from './Redux/slices/UserSlice';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  /*  useEffect(() => {
     const usertoken = JSON.parse(Cookies.get('token'));
     if (usertoken) {
       dispatch(login(usertoken))
       // Perform actions to restore the login state
     }
   }, [dispatch]); */
  useEffect(() => {
    const usertoken = Cookies.get('token');
    const userName = Cookies.get('userName')
    if (usertoken) {
      try {
        const parsedToken = JSON.parse(usertoken);
        dispatch(login(parsedToken, userName));

      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, [dispatch]);
  return (
    <>
      <div className="App ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Protectpages />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update" element={<Update />} />
              <Route path="/loads" element={<AllLoads />} />
              <Route path="/shipment" element={<Shipments />} />
              <Route path="/create" element={<Create />} />
            </Route>
            <Route path="/forget" element={<ForgetPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/reset-password" element={<ResetPage />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </BrowserRouter>
      </div >
    </>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;
