import * as React from 'react';

interface Props {
  element: React.ReactNode;
  delay?: number;
}

const FallbackWithDelay = (props: Props) => {
  const { delay = 300, element } = props;
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <>
      {show && element}
    </>
  );
};

export default FallbackWithDelay;
