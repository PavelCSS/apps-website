import { ErrorInfo } from 'react';

export type ErrorBoundaryProps = {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};
