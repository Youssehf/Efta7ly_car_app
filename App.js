import React from "react";
import AppNavigation from "./navigation/appNavigation";
import { AuthProvider } from "./context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
