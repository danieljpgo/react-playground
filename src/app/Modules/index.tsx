import * as React from 'react';
import SuspenseWrapper from '../main/routers/SuspenseWrapper';

const External = React.lazy(() => import('./External'));
const Internal = React.lazy(() => import('./Internal'));

const Modules = () => {
  const auth = true;

  return (
    <SuspenseWrapper
      delay={300}
      fallback={<div>Loading</div>}
    >
      {auth
        ? <Internal />
        : <External />}
    </SuspenseWrapper>
  );
};

export default Modules;
