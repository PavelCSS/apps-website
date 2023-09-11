import { render } from "react-dom";
import { SnackbarProvider } from "notistack";

import { appTheme } from "./themes";
import { containers } from "./routes/containers";
import { AppContainer } from "./containers";
import {
  AppCssBaseline,
  AppQueryClientProvider,
  CssBaseline,
  ThemeProvider,
} from "./components";

render(
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <AppCssBaseline />

    <SnackbarProvider autoHideDuration={7000}>
      <AppQueryClientProvider>
        <AppContainer routes={containers} />
      </AppQueryClientProvider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
