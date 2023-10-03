import { useContext } from 'react';
import './App.css';
import { AuthContext, AuthProvider } from './Component/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Setting from './Component/Setting'
import Login from './Component/Login'
import Protectpages from './Component/ProtectPages';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
function App() {
  const authContext = useContext(AuthContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Protectpages />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;
