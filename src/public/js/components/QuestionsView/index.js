import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { Question } from '../QuestionTypes';
import { Button } from '../Form/Button';
import { QuestionContainer, SuccessMessage, ButtonContainer } from './styles';
import { useQuestions } from './use-questions';

// TODO add back button
// TODO do visiable question version, current 1_BY_1, 1_AFTER_ANOTHER
// TODO How to map progress?
// TODO mode sync and async - how best to handle

export const QuestionsView = ({
  questions,
  userdata = {},
  questionAnimateInTime = 500, // TODO add animateOutTime
}) => {
  const [nextButtonHidden, setNextButtonHidden] = useState(true);
  const inputRef = useRef(null);

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

  useEffect(() => {
    if (inputRef?.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, questionAnimateInTime);
    }
  }, [inputRef?.current]);

  // TODO make success message configuarble

  return (
    <>
      {isComplete ? (
        <SuccessMessage>Thank you for completing the questions</SuccessMessage>
      ) : question.id ? (
        <QuestionContainer
          animateIn={!loading}
          animateInTime={questionAnimateInTime}
        >
          <Question
            {...question}
            userAnswers={userAnswers}
            onValid={onValidHandler}
            onInvalid={onInvalidHandler}
            disabled={loading}
            ref={inputRef}
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
  questionAnimateInTime: PropTypes.number,
};
