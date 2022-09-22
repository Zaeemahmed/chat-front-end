import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="conversation"
        element={
          <>
            conversation <Outlet />
          </>
        }
      >
        <Route path=":id" element={<>ID page</>} />
      </Route>
    </Routes>
  );
}

export default App;
