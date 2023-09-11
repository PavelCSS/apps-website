import { ComponentType, ReactNode } from 'react';

export interface IRoute {
  path?: string;
  type?: 'divider' | 'external' | 'subtitle';
  title?: ReactNode;
  pageTitle?: string;
  theme?: any;
  checkPermissions?: () => boolean;
  component?: ComponentType<any>;
}
