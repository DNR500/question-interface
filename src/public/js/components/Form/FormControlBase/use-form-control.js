import { useEffect, useRef, useState } from 'react';

export const useFormControl = (recievedValue, onInvalid, onValid) => {
  const controlRef = useRef();
  const [isTouched, setTouched] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    controlRef.current.focus();
  }, []);

  useEffect(() => {
    if (recievedValue) {
      setValue(recievedValue);
      // setTouched(true);
    }
  }, [recievedValue]);

  useEffect(() => {
    const control = controlRef.current;
    const validityCallback = control.validity.valid ? onValid : onInvalid;
    if (validityCallback) validityCallback(control);
  }, [value, isTouched, onInvalid, onValid]);

  return {
    controlRef,
    isTouched,
    setTouched,
    value,
    setValue,
  };
};
