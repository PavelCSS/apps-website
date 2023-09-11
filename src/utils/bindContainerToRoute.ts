import { ComponentType } from 'react';
import { IRoute } from '../types';

export const bindContainerToRoute = (route: IRoute, component: ComponentType<any>): IRoute => ({
  ...route,
  component,
});
