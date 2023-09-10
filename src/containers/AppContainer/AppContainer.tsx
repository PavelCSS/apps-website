import { FC } from "react";
import { ErrorBoundary } from "@toxic/backoffice-ui";
import { IRoute, Router } from "@toxic/navigation";

export type AppContainerProps = {
  routes: IRoute[];
};

export const AppContainer: FC<AppContainerProps> = ({ routes }) => {
  return (
    <ErrorBoundary>
      <Router routes={routes} />
    </ErrorBoundary>
  );
};
