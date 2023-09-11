import { ThemeProviderProps } from "./components";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    snackbarAction: string;
  }

  interface PaletteOptions {
    snackbarAction: string;
  }
}

const primaryMainDark = "#00D1CD";
const primaryMainLight = "#00D1CD";

const createTheme = (isDark: boolean) => {
  const primaryColor = isDark ? primaryMainDark : primaryMainLight;
  return {
    palette: {
      primary: {
        main: primaryColor,
      },
      snackbarAction: isDark ? primaryMainLight : primaryMainDark,
    },
    overrides: {
      MuiFormGroup: {
        root: {
          display: "inline-flex",
        },
      },
    },
  };
};

export const appTheme: ThemeProviderProps["theme"] = {
  dark: createTheme(true),
  light: createTheme(false),
};
