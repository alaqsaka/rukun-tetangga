import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomButton = ({
  children,
  onClick,
  type,
  className,
  size,
  disabled
}) => {
  return (
    <Button
      variant="contained"
      className={`a-button a-button-${type || 'primary'} ${className} ${size}`}
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string
};

CustomButton.defaultProps = {
  onClick: () => {},
  type: 'primary',
  className: '',
  size: ''
};

export default CustomButton;
