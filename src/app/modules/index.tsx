import * as React from 'react';
import { useAuth } from '../common/context/AuthContext';
import SuspenseWithDelay from '../common/layout/SuspenseWithDelay';

const External = React.lazy(() => import('./external'));
const Internal = React.lazy(() => import('./internal'));

// @TODO ajustar o useAuth
const Modules = () => {
  const [auth] = useAuth();

  console.log(auth);
  return (
    <SuspenseWithDelay
      delay={300}
      fallback={<div>Loading Modules</div>}
    >
      {auth
        ? <Internal />
        : <External />}
    </SuspenseWithDelay>
  );
};

export default Modules;
