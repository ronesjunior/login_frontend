import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Index from "./components/Index";
import Myprofile from "./components/MyProfile";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [token, setToken] = useState(() => {
    // Inicializa o estado com o token salvo no sessionStorage (se houver)
    return sessionStorage.getItem("token") || null; // sessionStorage.getItem("chave", "valor")
  });

  return (
    <Routes>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login setToken={setToken} />} />

      <Route
        path="/index"
        element={
          <ProtectedRoute token={token}>
            <Index />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myprofile"
        element={
          <ProtectedRoute token={token}>
            <Myprofile />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={
          token ? (
            <Navigate to="/index" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
