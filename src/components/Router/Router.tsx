import React, { ComponentType } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { isFunction } from 'lodash-es';

import { ScrollToTop } from '../ScrollToTop';
import { IRouterProps } from '../../types';
import { ThemeProvider } from '../ThemeProvider';
import { DefaultNotFound } from './DefaultNotFound';
import { DefaultPermissionsDenied } from './DefaultPermissionsDenied';

export const Router: ComponentType<IRouterProps> = ({
  routes,
  PermissionsDeniedComponent = DefaultPermissionsDenied,
  NotFoundComponent = DefaultNotFound,
  children,
}) => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        {routes
          .filter(route => !route.type)
          .map((route, index) => {
            const { checkPermissions, theme, component, path, ...rest } = route;

            let RouteComponent: ComponentType<any> = component!;

            if (isFunction(checkPermissions) && !checkPermissions()) {
              RouteComponent = PermissionsDeniedComponent;
            }

            return (
              <Route
                key={index}
                exact
                strict
                path={path}
                render={props =>
                  theme ? (
                    <ThemeProvider theme={theme} isRoot={false}>
                      <RouteComponent {...props} {...rest} />
                    </ThemeProvider>
                  ) : (
                    <RouteComponent {...props} {...rest} />
                  )
                }
              />
            );
          })}

        <Route key="notFound" component={NotFoundComponent} />
      </Switch>

      {children}
    </ScrollToTop>
  </HashRouter>
);
