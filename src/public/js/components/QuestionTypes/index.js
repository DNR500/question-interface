import { StringAnswered } from './StringAnswered';
import { IntAnswered } from './IntAnswered';
import { SingleOptionAnswered } from './SingleOptionAnswered';

const QUESTION_TYPES = {
  string: StringAnswered,
  int: IntAnswered,
  singleOption: SingleOptionAnswered,
};

export const getQuestionComponent = ({ answer }) =>
  answer?.type ? QUESTION_TYPES[answer.type] : null;
