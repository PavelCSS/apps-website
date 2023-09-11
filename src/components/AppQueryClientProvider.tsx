import { FC, useState } from "react";
import { useSnackbar } from "notistack";
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
  setLogger,
} from "react-query";
import { resolveErrorMessage } from "../utils";

setLogger({
  error: () => {},
  warn: () => {},
  log: () => {},
});

export const AppQueryClientProvider: FC<
  Omit<QueryClientProviderProps, "client">
> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          onError: (error: any) => {
            enqueueSnackbar(resolveErrorMessage(error));
          },
        },
        mutations: {
          onError: (error: any) => {
            enqueueSnackbar(resolveErrorMessage(error));
          },
        },
      },
    })
  );

  return <QueryClientProvider {...props} client={queryClient} />;
};
