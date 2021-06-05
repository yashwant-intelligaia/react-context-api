import React from "react";
import { AuthContext } from "./AuthContext";
const Login = (props) => {
  const { authState, authActions } = React.useContext(AuthContext);

  const login = () => {
    authActions.authStateChanged({ name: "Burhanuddin" });
  };

  const logout = () => {
    authActions.logout();
  };

  return (
    <div>
      {authState.user?.name}
      {authState.user && <button onClick={() => logout()}>Logout</button>}
      {!authState.user && <button onClick={() => login()}>Login</button>}
    </div>
  );
};

export default Login;
