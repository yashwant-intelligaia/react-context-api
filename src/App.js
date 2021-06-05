import "./styles.css";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Home from "./Home";
export default function App() {
  return (
    <AuthProvider>
      <Home />
      <Login />
    </AuthProvider>
  );
}
