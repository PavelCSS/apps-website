import { compile } from 'path-to-regexp';
import { stringify } from 'query-string';
import { omitBy, isNil } from 'lodash-es';

export const createHref = (path?: string, params = {}, query = {}) => {
  const compiledPath = compile(path || '/')(params);
  const compiledQuery = stringify(omitBy(query, isNil));

  return `${compiledPath}${compiledQuery ? '?' : ''}${compiledQuery}`;
};
