import Modules from './modules';
import { ErrorBoundary } from './common/components/layout';
import './styles/global.css';

function FallbackPage({ error }: { error: unknown }) {
  return (
    <div>{String(error)}</div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={FallbackPage}>
      <Modules />
    </ErrorBoundary>
  );
}
