import React from 'react';
import PropTypes from 'prop-types';

import { FormControlBase } from '../FormControlBase';
import { BaseInput } from './styles';

export const Input = ({ type, ...props }) => {
  return (
    <FormControlBase {...props}>
      <BaseInput type={type} />
    </FormControlBase>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  ...FormControlBase.propTypes,
  type: PropTypes.string,
};
