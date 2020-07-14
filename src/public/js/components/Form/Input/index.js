import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { FormControlBase } from '../FormControlBase';
import { BaseInput } from './styles';

export const Input = forwardRef(({ type, ...props }, ref) => {
  return (
    <FormControlBase {...props}>
      <BaseInput type={type} ref={ref} />
    </FormControlBase>
  );
});

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  ...FormControlBase.propTypes,
  type: PropTypes.string,
};
