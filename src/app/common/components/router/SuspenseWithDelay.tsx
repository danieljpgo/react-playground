import * as React from 'react';

type FallbackProps = {
  element: React.ReactNode;
  delay?: number;
};

function Fallback(props: FallbackProps) {
  const { delay = 300, element } = props;
  const [ready, setReady] = React.useState(false);

  React.useLayoutEffect(() => {
    const timeout = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <>
      {ready && element}
    </>
  );
}

type SuspenseWithDelayProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
  delay?: number;
};

export default function SuspenseWithDelay(props: SuspenseWithDelayProps) {
  const { fallback, delay, children } = props;

  return (
    <React.Suspense fallback={<Fallback delay={delay} element={fallback} />}>
      {children}
    </React.Suspense>
  );
}
