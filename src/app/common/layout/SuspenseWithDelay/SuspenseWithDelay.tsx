import * as React from 'react';
import type { Children } from '../../types/children';

interface FallbackWithDelayProps {
  element: React.ReactNode;
  delay?: number;
}

const FallbackWithDelay = (props: FallbackWithDelayProps) => {
  const { delay = 300, element } = props;
  const [show, setShow] = React.useState(false);

  React.useLayoutEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <>
      {show && element}
    </>
  );
};

interface SuspenseWithDelayProps extends Children {
  fallback: React.ReactNode;
  delay?: number;
}

const SuspenseWithDelay = (props: SuspenseWithDelayProps) => {
  const { fallback, delay, children } = props;

  return (
    <React.Suspense
      key="suspense"
      fallback={<FallbackWithDelay delay={delay} element={fallback} />}
    >
      {children}
    </React.Suspense>
  );
};

export default SuspenseWithDelay;
