import * as React from 'react';

type State = {
  error: unknown;
};

type Props = {
  children: React.ReactNode;
  fallback: React.ComponentType<State>;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback: Fallback } = this.props;

    if (error) {
      return <Fallback error={error} />;
    }

    return children;
  }
}
