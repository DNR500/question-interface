import React from 'react';
import PropTypes from 'prop-types';

import { Select } from '../../Form/Select';

export const SingleOptionAnswered = ({
  id,
  question,
  answer: { validation, propertyName, options, defaultValue },
  userAnswers = {},
  ...props
}) => {
  const userAnswer = userAnswers[propertyName] || defaultValue;

  return (
    <Select
      {...props}
      {...validation}
      id={id}
      labelText={question}
      value={userAnswer}
      defaultValue={defaultValue}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={`${value}_${label}`}>
          {label}
        </option>
      ))}
    </Select>
  );
};

SingleOptionAnswered.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.shape({
    validation: PropTypes.shape({}),
    propertyName: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    defaultValue: PropTypes.string,
  }).isRequired,
  userAnswers: PropTypes.shape({}),
};
