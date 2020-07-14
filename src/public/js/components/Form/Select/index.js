import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { BaseSelect } from './styles';
import { FormControlBase } from '../FormControlBase';

export const Select = forwardRef(({ children, ...props }, ref) => (
  <FormControlBase {...props}>
    <BaseSelect ref={ref}>{children}</BaseSelect>
  </FormControlBase>
));

Select.propTypes = {
  ...FormControlBase.propTypes,
  /** options to be rendered in the select field */
  children: PropTypes.node,
};
