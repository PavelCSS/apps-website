import React, { FC, useCallback, useMemo } from "react";
import { bool, node, shape } from "prop-types";
import { isObject, merge } from "lodash-es";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { SnackbarOrigin } from "@material-ui/core/Snackbar/Snackbar";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";

import { ThemeType } from "./ThemeType";
import { ThemeContext } from "./ThemeContext";
import { ThemeProviderProps } from "./ThemeProviderProps";
import { useThemeType } from "./useThemeType";

const textSecondaryColors: Record<ThemeType, string> = {
  [ThemeType.Light]: "rgba(0, 0, 0, .6)",
  [ThemeType.Dark]: "rgba(255, 255, 255, .7)",
};

/**
 * @param children
 * @param theme Example:
 *
 * const theme = {
 *   light: ThemeObject,
 *   dark: ThemeObject,
 * };
 * OR
 * const theme = ThemeObject;
 * @param isRoot:
 *
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  isRoot = true,
}) => {
  const [themeType, setThemeType] = useThemeType();
  const themeChange = useCallback(
    (isDarkMode) => {
      setThemeType(isDarkMode ? ThemeType.Dark : ThemeType.Light);
    },
    [setThemeType]
  );
  const isDarkMode = themeType === ThemeType.Dark;

  const appTheme = useMemo(
    () =>
      createMuiTheme(
        merge(
          {
            mixins: { toolbar: undefined },
            palette: {
              text: {
                secondary: textSecondaryColors[themeType],
              },
              type: themeType,
            },
            typography: {
              h6: {
                lineHeight: "24px",
                letterSpacing: "0.15px",
              },
              h5: {
                lineHeight: "32px",
                letterSpacing: "0.15px",
              },
              h4: {
                lineHeight: "40px",
              },
              body2: {
                lineHeight: "24px",
                letterSpacing: "0.25px",
              },
              subtitle1: {
                lineHeight: "24px",
                letterSpacing: "0.15px",
              },
              subtitle2: {
                lineHeight: "24px",
                letterSpacing: "0.1px",
              },
              overline: {
                fontSize: "10px",
                lineHeight: "16px",
                letterSpacing: "1.5px",
              },
              caption: {
                lineHeight: "16px",
                letterSpacing: "0.4px",
              },
            },
            props: {
              MuiMenuItem: {
                dense: true,
              },
              MuiSnackbar: {
                anchorOrigin: {
                  vertical: "bottom" as SnackbarOrigin["vertical"],
                  horizontal: "left" as SnackbarOrigin["horizontal"],
                },
                autoHideDuration: 10000,
              },
              MuiTabs: {
                textColor: "primary",
                indicatorColor: "primary",
              },
              MuiTab: {
                disableRipple: true,
              },
            },
            overrides: {
              MuiMenu: {
                list: {
                  minWidth: 160,

                  '& [class*="MuiDivider-root"]': {
                    margin: "8px 0",
                  },
                },
              },
              MuiMenuItem: {
                dense: {
                  lineHeight: "20px",
                },
              },
              MuiChip: {
                root: {
                  padding: "0 12px",

                  "&, &$outlined": {
                    "& $deleteIcon": {
                      color: textSecondaryColors[themeType],
                      width: 18,
                      height: 18,
                      marginLeft: 8,
                      marginRight: -4,
                    },
                    "& $avatar": {
                      marginLeft: -8,
                      marginRight: 8,
                    },
                    "& $icon": {
                      marginLeft: -4,
                      marginRight: 8,
                    },
                  },
                },

                label: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
              },
              MuiFormControlLabel: {
                root: {
                  marginLeft: -6,

                  "&+&": {
                    marginTop: 4,
                  },

                  '& [class*="MuiRadio-root"], & [class*="MuiCheckbox-root"]': {
                    padding: 4,

                    '& [class*="MuiTouchRipple-root"]': {
                      top: -5,
                      left: -5,
                      right: -5,
                      bottom: -5,
                    },
                  },
                },
                label: {
                  fontSize: 14,
                  marginLeft: 4,
                },
              },
              MuiTab: {
                root: {
                  fontSize: 14,
                  padding: "6px 16px",
                  letterSpacing: "0.75px",

                  "&&": {
                    minWidth: "auto",
                  },
                },
              },
            },
            iconButton: {
              // size = 18px
              small: {
                padding: 0,
                fontSize: 18,
              },
              // size = 32px
              medium: {
                padding: 4,
                fontSize: 24,
              },
              // size = 40px
              large: {
                padding: 8,
                fontSize: 24,
              },
            },
            isDarkMode,
          },
          isObject(theme)
            ? (theme as Record<ThemeType, ThemeOptions>)[themeType] || theme
            : {}
        )
      ),
    [theme, themeType, isDarkMode]
  );

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        themeChange,
      }}
    >
      {isRoot ? (
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={appTheme}>
            <StyledThemeProvider theme={appTheme}>
              {children}
            </StyledThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      ) : (
        <MuiThemeProvider theme={appTheme}>
          <StyledThemeProvider theme={appTheme}>{children}</StyledThemeProvider>
        </MuiThemeProvider>
      )}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  theme: shape({}),
  children: node.isRequired,
  isRoot: bool,
};
