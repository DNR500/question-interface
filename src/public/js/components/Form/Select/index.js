import React from 'react';
import PropTypes from 'prop-types';

import { BaseSelect } from './styles';
import { FormControlBase } from '../FormControlBase';

export const Select = ({ children, ...props }) => (
  <FormControlBase {...props}>
    <BaseSelect>{children}</BaseSelect>
  </FormControlBase>
);

Select.propTypes = {
  ...FormControlBase.propTypes,
  /** options to be rendered in the select field */
  children: PropTypes.node,
};
