import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { ConversationChannelPage } from "./pages/ConversationChannelPage";
import { ConversationsPage } from "./pages/ConversationsPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthContext } from "./utils/context/authContext";
import { User } from "./utils/types";

function App() {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider
      value={{ user, updateAuthUser: (data: User) => setUser(data) }}
    >
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
    </AuthContext.Provider>
  );
}

export default App;
