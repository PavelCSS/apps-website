import {
  FC,
  useState
} from 'react';
import { useSnackbar } from 'notistack';
import { resolveErrorMessage } from '@toxic/utils';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
  setLogger
} from 'react-query';

setLogger({
  error: () => {},
  warn: () => {},
  log: () => {},
});

export const AppQueryClientProvider: FC<Omit<QueryClientProviderProps, 'client'>> = props => {
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
