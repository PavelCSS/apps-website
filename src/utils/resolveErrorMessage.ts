import { isString, isFunction } from 'lodash-es';

interface CustomError {
  getMessage: Function;
}

export const resolveErrorMessage = (
  error?: Error | string | CustomError,
  defaultErrorMessage = '',
  showDetails = true
): string => {
  if (error) {
    if (isString(error)) {
      return error;
    }

    if ('message' in error) {
      return error.message;
    }

    if (showDetails && isFunction(error.getMessage)) {
      return error.getMessage();
    }
  }

  return defaultErrorMessage;
};
