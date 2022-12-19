import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from "./Componentes/Login";
import { Register } from "./Componentes/Register";
import { Logout } from "./Componentes/Logout";
import { ProtectedRoute } from "./Componentes/ProtectedRoute";

import { AuthProvider } from "./context/authContext";
import Principal from "./Componentes/Principal";
import MostrarFavoritas from "./Componentes/MostrarFavoritas";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Principal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mostrarfavoritas"
              element={
                <ProtectedRoute>
                  <MostrarFavoritas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
