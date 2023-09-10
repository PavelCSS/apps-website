import { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '@material-ui/core';
import { Actions } from '@toxic/backoffice-ui';
import { IconButton } from '@toxic/ui';
import { useSnackbar } from 'notistack';

type NotistackActionsProps = {
  id: any;
  children?: any;
};

const StyledIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.palette.text.primary};
  filter: invert();
`;

export const NotistackActions: FC<NotistackActionsProps> = ({ id, children }) => {
  const { closeSnackbar } = useSnackbar();

  const handleClose = () => closeSnackbar(id);

  return (
    <Actions gutter={1} pl={1} pr={1} color={'snackbarAction'}>
      {children}

      <StyledIconButton size={'small'} onClick={handleClose}>
        <Icon>clear</Icon>
      </StyledIconButton>
    </Actions>
  );
};
