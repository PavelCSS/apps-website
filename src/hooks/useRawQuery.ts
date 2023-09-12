import { useMemo } from 'react';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';

export const useRawQuery = () => {
  const { search } = useLocation();

  return useMemo(() => parse(search), [search]);
};
