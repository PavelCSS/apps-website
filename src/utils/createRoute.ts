import { IRoute } from '../types';

export const createRoute = (path: string, options: IRoute = {}): IRoute => ({
  path,
  ...options,
});
