import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';

export const DefaultNotFound = memo(() => (
  <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} pt={10}>
    <Typography variant={'h1'}>🧐</Typography>
    <br />
    <Typography variant={'body1'} color={'textSecondary'}>
      We are sorry, but the page you requested was not found.
    </Typography>
  </Box>
));
DefaultNotFound.displayName = 'DefaultNotFound';
