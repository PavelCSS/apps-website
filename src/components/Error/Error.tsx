import React, { FC } from 'react';
import { node, string } from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { ErrorProps } from './ErrorProps';

export const Error: FC<ErrorProps> = ({
  message,
  title,
  actionMessage = 'Please try to reload the page.',
  description,
}) => (
  <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} pt={10}>
    <Typography variant={'h1'}>{title}</Typography>
    <br />
    <Typography variant={'body1'} color={'textSecondary'}>
      {message}
    </Typography>
    <Typography variant={'body1'} color={'textSecondary'} style={{ whiteSpace: 'pre' }}>
      {actionMessage}
    </Typography>

    {description ? (
      <Box pt={1}>
        <Typography variant={'body2'} color={'error'}>
          Error: {description}
        </Typography>
      </Box>
    ) : null}
  </Box>
);

Error.propTypes = {
  title: node.isRequired,
  message: string.isRequired,
  actionMessage: string,
  description: string,
};
