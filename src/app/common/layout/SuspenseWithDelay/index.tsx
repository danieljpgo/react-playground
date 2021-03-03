import * as React from 'react';
import type { Children } from '../../types/children';
import Fallback from '../FallbackWithDelay';

interface Props extends Children {
  fallback: React.ReactNode;
  delay?: number;
}

const SuspenseWithDelay = (props: Props) => {
  const { fallback, delay = 300, children } = props;

  return (
    <React.Suspense
      key="suspense"
      fallback={<Fallback delay={delay} element={fallback} />}
    >
      {children}
    </React.Suspense>
  );
};

export default SuspenseWithDelay;
