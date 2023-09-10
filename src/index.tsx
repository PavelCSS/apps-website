import { render } from "react-dom";
import { SnackbarProvider } from "notistack";
import { CssBaseline, ThemeProvider } from "@toxic/ui";
import { AppCssBaseline, AppQueryClientProvider } from "./components";
import { AppContainer } from "./containers";
import { containers } from "./routes/containers";
import { appTheme } from "./themes";

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
