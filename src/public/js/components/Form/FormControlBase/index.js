import React from 'react';
import PropTypes from 'prop-types';

import { useFormControl } from './use-form-control';
import { ControlWrap, HelperText, LabelText, Label } from './styles';
import { mergeRefs } from '../../../hooks/utils/merge-refs';

export const FormControlBase = ({
  className,
  errorMessage,
  id,
  labelText,
  onBlur,
  onChange,
  onValid,
  onInvalid,
  children,
  value: recievedValue,
  ...props
}) => {
  const { controlRef, isTouched, setTouched, value, setValue } = useFormControl(
    recievedValue,
    onInvalid,
    onValid
  );

  const onBlurHandle = (e) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const onSubmitInvalidHandler = (e) => {
    e.preventDefault();
    setTouched(true);
  };

  const controlProps = {
    id,
    isTouched,
    value,
    name: id,
    onBlur: onBlurHandle,
    onChange: onChangeHandler,
    onInvalid: onSubmitInvalidHandler,
  };

  return (
    <Label className={className} isTouched={isTouched}>
      <LabelText>{labelText}</LabelText>
      <ControlWrap>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...props,
            ...controlProps,
            ...child.props,
            ref: mergeRefs(controlRef, child.ref),
          })
        )}
        {errorMessage && <HelperText>{errorMessage}</HelperText>}
      </ControlWrap>
    </Label>
  );
};

FormControlBase.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onInvalid: PropTypes.func,
  onValid: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};
