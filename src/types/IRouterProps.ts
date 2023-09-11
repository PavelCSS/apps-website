import { ComponentType } from 'react';
import { IRoute } from './IRoute';

export interface IRouterProps {
  routes: IRoute[];
  NotFoundComponent?: ComponentType<any>;
  PermissionsDeniedComponent?: ComponentType<any>;
}
