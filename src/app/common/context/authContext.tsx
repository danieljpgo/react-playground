import * as React from 'react';
import { auth } from '../../services/requests';
import { removeLocalStorageData, setLocalStorageData } from '../utils';

type Auth = {
  token?: string;
};

type AuthActions =
| { type: 'LOGIN', token: string }
| { type: 'LOGOUT' };

const initialState: Auth = {
  token: undefined,
};

function authReducer(state: typeof initialState = initialState, action: AuthActions): Auth {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
      };

    case 'LOGOUT':
      return {
        ...state,
        token: undefined,
      };

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

type AuthContextType = [Auth, React.Dispatch<AuthActions>] | undefined;
const AuthContext = React.createContext<AuthContextType>(undefined);

type TaskProviderProps = {
  children : React.ReactNode
};
export function AuthProvider(props: TaskProviderProps) {
  const { children } = props;
  const [authData, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[authData, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export function useLogin() {
  const [, dispatch] = useAuth();

  const login = React.useCallback(async (user: { login: string, password: string }) => {
    const { token } = await auth.login(user);

    setLocalStorageData('token', token); // @TODO Melhor solução para sessão
    dispatch({ token, type: 'LOGIN' });
  }, [dispatch]);

  return login;
}

export function useLogout() {
  const [, dispatch] = useAuth();

  const logout = React.useCallback(async () => {
    await auth.logout();

    removeLocalStorageData('token');
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  return logout;
}
