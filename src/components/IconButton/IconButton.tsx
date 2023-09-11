import React, { FC, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IconButton as MuiIconButton, makeStyles } from '@material-ui/core';
import { IconButtonProps } from './IconButtonProps';

const useStyles = makeStyles(({ iconButton }) => ({
  root: {
    padding: ({ size }: IconButtonProps) => iconButton[size!].padding,
    fontSize: ({ size }: IconButtonProps) => iconButton[size!].fontSize,

    '& [class*="MuiIcon-root"]': {
      fontSize: 'inherit',
    },
  },
  /* Styles applied to the root element if `edge="start"`. */
  edgeStart: {
    marginLeft: ({ size }: IconButtonProps) => iconButton[size!].padding * -1,
  },
  /* Styles applied to the root element if `edge="end"`. */
  edgeEnd: {
    marginRight: ({ size }: IconButtonProps) => iconButton[size!].padding * -1,
  },
}));

export const IconButton: FC<IconButtonProps> = forwardRef((props, ref) => {
  const classes = useStyles(props);

  return <MuiIconButton {...props} size={undefined} classes={classes} ref={ref} />;
});

IconButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IconButton.defaultProps = {
  size: 'medium',
};
IconButton.displayName = 'IconButton';
