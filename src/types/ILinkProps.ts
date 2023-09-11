import { LinkProps } from '@material-ui/core/Link';
import { LinkProps as RouterLinkProps } from 'react-router-dom';
import { IRoute } from './IRoute';

export interface ILinkProps extends LinkProps, Partial<Pick<RouterLinkProps, 'replace'>> {
  route: IRoute;
  query?: Record<string, any>;
  params?: Record<string, any>;
}
