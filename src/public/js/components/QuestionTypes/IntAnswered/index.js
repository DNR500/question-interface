import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { IntInput } from '../../Form/IntInput';

export const IntAnswered = forwardRef(
  (
    {
      id,
      question,
      answer: { validation, propertyName },
      userAnswers = {},
      ...props
    },
    ref
  ) => {
    const userAnswer = userAnswers[propertyName];

    return (
      <IntInput
        {...props}
        {...validation}
        id={id}
        labelText={question}
        value={userAnswer}
        ref={ref}
      />
    );
  }
);

IntAnswered.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.shape({
    validation: PropTypes.shape({}),
    propertyName: PropTypes.string,
  }).isRequired,
  userAnswers: PropTypes.shape({}),
};
