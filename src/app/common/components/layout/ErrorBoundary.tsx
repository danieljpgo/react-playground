import * as React from 'react';

type ErrorBoundaryState = {
  error?: Error;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ComponentType<ErrorBoundaryState>;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  static componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, info);
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
