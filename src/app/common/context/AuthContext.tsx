import * as React from 'react';
import { Children } from '../types/children';

// @TODO melhorar o auth
export type Auth = {
  token: string,
};

const initialState: Auth = {
  token: '',
};

type AuthActions =
  | { type: 'login'; token: string };

function authReducer(state: typeof initialState = initialState, action: AuthActions) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        token: action.token,
      };

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

type AuthContextType = [Auth, React.Dispatch<AuthActions>] | undefined;
const AuthContext = React.createContext<AuthContextType>(undefined);

type AuthProviderProps = Children;
const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [auth, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[auth, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvide');
  }
  return context;
};

export { AuthProvider, useAuth };
