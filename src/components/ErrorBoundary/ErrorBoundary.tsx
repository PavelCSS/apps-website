import React, { Component, ErrorInfo } from "react";
import { isFunction } from "lodash-es";
import { ErrorBoundaryProps } from "./ErrorBoundaryProps";
import { RuntimeError } from "../RuntimeError";

type ErrorBoundaryState = {
  hasError?: boolean;
  errorMessage?: string;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {};

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      errorMessage: error?.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    if (isFunction(onError)) {
      onError(error, errorInfo);
    }
  }

  render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return <RuntimeError message={errorMessage} />;
    }

    return this.props.children;
  }
}
