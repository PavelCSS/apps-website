import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { AppViewProps } from './AppViewProps';

export const AppView: FC<AppViewProps> = props => (
  <Box height={'100%'} display={'flex'} flexDirection={'column'} {...props} />
);
