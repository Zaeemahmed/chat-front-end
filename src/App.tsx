import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>hellooo</>} />
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
    </div>
  );
}

export default App;
