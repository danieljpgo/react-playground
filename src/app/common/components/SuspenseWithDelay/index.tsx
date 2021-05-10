import * as React from 'react';

interface FallbackProps {
  element: React.ReactNode;
  delay?: number;
}

const Fallback = (props: FallbackProps) => {
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

interface SuspenseWithDelayProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  delay?: number;
}

const SuspenseWithDelay = (props: SuspenseWithDelayProps) => {
  const { fallback, delay, children } = props;

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
