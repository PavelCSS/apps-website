import { useCallback, useState } from 'react';
import { ThemeType } from './ThemeType';

const STORAGE_KEY = 'themeType';
const log = (e: any) => console.warn('[THEME TYPE]', e);

function isValidThemeType(value: any): value is ThemeType {
  return !!value && Object.values<string>(ThemeType).includes(value);
}

function readThemeType(defaultThemeType: ThemeType): ThemeType {
  try {
    const storageThemeType = localStorage.getItem(STORAGE_KEY);

    if (isValidThemeType(storageThemeType)) return storageThemeType;
  } catch (e) {
    log(e);
  }

  return defaultThemeType;
}

function writeThemeType(themeType: ThemeType): void {
  try {
    localStorage.setItem(STORAGE_KEY, themeType);
  } catch (e) {
    log(e);
  }
}

export function useThemeType(): [ThemeType, (themeType: ThemeType) => void] {
  const [themeType, setThemeType] = useState<ThemeType>(readThemeType(ThemeType.Light));

  const setter = useCallback((nextThemeType: ThemeType) => {
    writeThemeType(nextThemeType);
    setThemeType(nextThemeType);
  }, []);

  return [themeType, setter];
}
