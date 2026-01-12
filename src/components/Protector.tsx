import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface ProtectorProps {
  component: ReactElement;
}

export default function Protector({ component }: ProtectorProps) {
  const stored = localStorage.getItem("currentUser");
  if (!stored) return <Navigate to="/login" replace />;

  try {
    const user = JSON.parse(stored);
    if (!user) return <Navigate to="/login" replace />;
    return component;
  } catch {
    return <Navigate to="/login" replace />;
  }
}
