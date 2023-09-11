import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { FC } from 'react';
import { ActionsProps } from './ActionsProps';

export const Actions: FC<ActionsProps> = styled(Box)`
  > * + * {
    margin-left: ${(p: any) => p.theme.spacing(p.gutter)}px;
  }
`;

Actions.defaultProps = {
  gutter: 2,
  display: 'flex',
  alignItems: 'center',
};
