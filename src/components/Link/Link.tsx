import React, { forwardRef } from 'react';
import { Link as MuiLink } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { createHref } from '../../utils';
import { ILinkProps } from '../../types';

const WrappedRouterLink = forwardRef<any, RouterLinkProps>((props, ref) => <RouterLink {...props} ref={ref} />);

export const Link = forwardRef<HTMLElement, ILinkProps>(({ route, params, query, ...restProps }, ref) => (
  <MuiLink {...restProps} ref={ref} component={WrappedRouterLink} to={createHref(route.path, params, query)} />
));

Link.defaultProps = {
  params: {},
  query: {},
};
