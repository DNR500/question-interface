import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StringAnswered } from './StringAnswered';
import { IntAnswered } from './IntAnswered';
import { SingleOptionAnswered } from './SingleOptionAnswered';

export const Question = forwardRef(({ answer, ...props }, ref) =>
  answer?.type ? (
    answer.type === 'string' ? (
      <StringAnswered {...props} answer={answer} ref={ref} />
    ) : answer.type === 'int' ? (
      <IntAnswered {...props} answer={answer} ref={ref} />
    ) : answer.type === 'singleOption' ? (
      <SingleOptionAnswered {...props} answer={answer} ref={ref} />
    ) : null
  ) : null
);

Question.propTypes = {
  answer: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};
