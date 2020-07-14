import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../Form/Input';

export const StringAnswered = forwardRef(
  (
    {
      id,
      question,
      answer: { validation, propertyName, defaultValue },
      userAnswers = {},
      ...props
    },
    ref
  ) => {
    const userAnswer = userAnswers[propertyName];

    return (
      <Input
        {...props}
        {...validation}
        id={id}
        type="text"
        labelText={question}
        value={userAnswer}
        defaultValue={defaultValue}
        ref={ref}
      />
    );
  }
);

StringAnswered.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.shape({
    validation: PropTypes.shape({}).isRequired,
    propertyName: PropTypes.string,
    defaultValue: PropTypes.string,
  }).isRequired,
  userAnswers: PropTypes.shape({}),
};
