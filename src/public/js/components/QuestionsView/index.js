import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { getQuestionComponent } from '../QuestionTypes';
import { Button } from '../Form/Button';
import { QuestionContainer, SuccessMessage, ButtonContainer } from './styles';
import { useQuestions } from './use-questions';

export const QuestionsView = ({ questions, userdata = {} }) => {
  const [nextButtonHidden, setNextButtonHidden] = useState(true);

  const {
    question,
    userAnswers,
    isComplete,
    setAnswer,
    loading,
    submitAnswer,
  } = useQuestions(questions, userdata);

  const onNextHandler = async () => {
    setNextButtonHidden(true);
    await submitAnswer();
  };

  const onValidHandler = (control) => {
    setAnswer(control.value);

    if (!loading) setNextButtonHidden(false);
  };

  const onInvalidHandler = () => {
    if (!loading) setNextButtonHidden(true);
  };

  const QuestionComponent = getQuestionComponent(question);

  return (
    <>
      {isComplete ? (
        <SuccessMessage>Thank you for completing the questions</SuccessMessage>
      ) : question.id ? (
        <QuestionContainer animateIn={!loading}>
          <QuestionComponent
            {...question}
            userAnswers={userAnswers}
            onValid={onValidHandler}
            onInvalid={onInvalidHandler}
            disabled={loading}
          />
          <ButtonContainer>
            <Button
              type="button"
              isHidden={nextButtonHidden}
              onClick={onNextHandler}
            >
              Next
            </Button>
            {loading && (
              <ReactLoading
                type="spin"
                color="gainsboro"
                height={42}
                width={42}
              />
            )}
          </ButtonContainer>
        </QuestionContainer>
      ) : null}
    </>
  );
};

QuestionsView.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      displayCondition: PropTypes.shape({
        id: PropTypes.string,
        start: PropTypes.bool,
        match: PropTypes.shape({
          value: PropTypes.string.isRequired,
        }),
      }).isRequired,
      answer: PropTypes.shape({
        type: PropTypes.string.isRequired,
        validation: PropTypes.shape({}).isRequired,
        propertyName: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
          })
        ),
      }).isRequired,
    })
  ),
  userdata: PropTypes.shape({}),
};
