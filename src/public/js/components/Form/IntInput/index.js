import React from 'react';

import { Input } from '../Input';

export const IntInput = ({ ...props }) => {
  const onKeyDownHandler = (e) => {
    if (e.key === '-' || e.key === '+') e.preventDefault();
  };

  return <Input {...props} type="number" onKeyDown={onKeyDownHandler} />;
};

IntInput.propTypes = Input.propTypes;
