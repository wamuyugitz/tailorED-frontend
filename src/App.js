import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public route for registration/login */}
          <Route
            path="/registration/reset-password/:resetToken"
            element={<Registration />}
          />
          <Route path="/registration/:screen" element={<Registration />} />

          <Route path="/tutor/:screen" element={<Home />} />
          <Route path="/admin/:screen" element={<Home />} />
          <Route path="/student/:screen" element={<Home />} />

          {/* Private route for authenticated users */}
          {user ? (
            <>
              {/* Redirect to role-specific home */}
              <Route path={`/${user?.role}/dashboard`} element={<Home />} />
              {/* Redirect any unmatched '/' to role-specific home */}
              <Route
                path="/"
                element={<Navigate to={`/${user?.role}/dashboard`} />}
              />
            </>
          ) : (
            // Redirect to registration/login if user not logged in
            <Route path="/" element={<Navigate to="/registration/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
