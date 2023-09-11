import { FC } from "react";
import { IRoute } from "../../types";
import { ErrorBoundary, Router } from "../../components";

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
