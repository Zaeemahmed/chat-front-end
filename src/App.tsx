import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { useAuth } from "./hooks/useAuth";
import { ConversationChannelPage } from "./pages/ConversationChannelPage";
import { ConversationsPage } from "./pages/ConversationsPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/conversation"
        element={
          <AuthenticatedRoute>
            <ConversationsPage />
          </AuthenticatedRoute>
        }
      >
        <Route path=":id" element={<ConversationChannelPage />} />
      </Route>
    </Routes>
  );
}

export default App;
