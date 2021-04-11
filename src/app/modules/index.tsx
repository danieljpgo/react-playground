import * as React from 'react';
import SuspenseWithDelay from '../common/layout/SuspenseWithDelay';

const External = React.lazy(() => import('./external'));
const Internal = React.lazy(() => import('./internal'));

const Modules = () => {
  const auth = true;

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
