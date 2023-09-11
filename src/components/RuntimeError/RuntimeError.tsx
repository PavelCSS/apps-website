import { string } from 'prop-types';
import React, { FC } from 'react';
import { Error } from '../Error';
import { RuntimeErrorProps } from './RuntimeErrorProps';

export const RuntimeError: FC<RuntimeErrorProps> = ({ message }) => (
  <Error
    title={
      <span role={'img'} aria-label={'dead'}>
        😵
      </span>
    }
    message={'Unfortunately, an error occurred while using the application.'}
    description={message}
  />
);
RuntimeError.propTypes = {
  message: string,
};
