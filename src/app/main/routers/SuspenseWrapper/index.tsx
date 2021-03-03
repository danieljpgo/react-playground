import * as React from 'react';
import type { Children } from '../../../common/types/children';
import Fallback from '../Fallback';

interface Props extends Children {
  fallback: React.ReactNode;
  delay?: number;
}

const SuspenseWrapper = (props: Props) => {
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

export default SuspenseWrapper;
