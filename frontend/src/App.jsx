import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Sign from './pages/Sign'
import Dashbord from './pages/dashbord'
import ProtectedRoute from './components/ProtectedRoute'
import Leader from './pages/leader'
import Event from './pages/event'
import Notification from './pages/notification'
import Admindash from './pages/admindashboard'
import AdminLogin from './pages/adminlogin'
import ProtectedRouteadmin from './components/protectadmin'
import Leaderlist from './pages/leaderlist'
import EditLeader from './pages/editlist'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRouteadmin>
              <Leader />
            </ProtectedRouteadmin>
          }
        />
        <Route
          path="/notification"
          element={
            <ProtectedRouteadmin>
              <Notification />
            </ProtectedRouteadmin>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRouteadmin>
              <Event />
            </ProtectedRouteadmin>
          }
        />
        <Route
          path="/admindashbord"
          element={
            <ProtectedRouteadmin>
              <Admindash />
            </ProtectedRouteadmin>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />

        <Route
          path="/dashbord"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderlist"
          element={
            <ProtectedRouteadmin>
              <Leaderlist />
            </ProtectedRouteadmin>
          }
        />
        <Route
          path="/editleader/:id"
          element={
            <ProtectedRouteadmin>
              <EditLeader />
            </ProtectedRouteadmin>
          }
        />
      </Routes>
    </div>
  );
}

export default App
