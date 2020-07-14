import React, { forwardRef } from 'react';

import { Input } from '../Input';

export const IntInput = forwardRef(({ ...props }, ref) => {
  const onKeyDownHandler = (e) => {
    if (e.key === '-' || e.key === '+') e.preventDefault();
  };

  return (
    <Input {...props} type="number" onKeyDown={onKeyDownHandler} ref={ref} />
  );
});

IntInput.propTypes = Input.propTypes;
