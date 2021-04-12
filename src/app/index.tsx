import { AuthProvider } from './common/context/AuthContext';
import Modules from './modules';
import './styles/global.css';

const App = () => (
  <AuthProvider>
    <Modules />
  </AuthProvider>
);

export default App;
