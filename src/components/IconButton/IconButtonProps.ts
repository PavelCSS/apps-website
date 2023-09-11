import { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';

export type IconButtonProps = Omit<MuiIconButtonProps, 'size'> & {
  size?: 'small' | 'medium' | 'large';
};
