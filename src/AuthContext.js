import React, { useReducer } from "react";

const initialState = {
  user: null
};

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        user: action.payload
      };
    default:
      return state;
  }
};

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const actions = {
    authStateChanged: (user) => {
      if (user) {
        dispatch({ type: AUTH_STATE_CHANGED, payload: user });
      }
    },

    logout: () => {
      dispatch({ type: AUTH_STATE_CHANGED, payload: null });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        authActions: actions
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
