import React from "react";
import { AuthContext } from "./AuthContext";
function Home(props) {
  const { authState, authActions } = React.useContext(AuthContext);
  return <h1>{authState.user ? authState.user.name : "Home"}</h1>;
}
export default Home;
