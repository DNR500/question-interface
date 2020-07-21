import { useEffect, useState } from 'react';

const getStartQuestion = (questions) =>
  questions.find(({ displayCondition }) => displayCondition?.start);

const getNextQuestion = (
  // TODO abstract this so the onQuestionAnswered can be passed
  currentQuestion,
  currentAnswer,
  questions,
  // TODO allow questions to template based on userAnswer values
  userAnswers // eslint-disable-line no-unused-vars
) =>
  // mimic server request
  new Promise((res) => {
    setTimeout(
      () =>
        res(
          questions.find(
            ({ displayCondition: { id, match } }) =>
              id === currentQuestion.id &&
              (!match || match.value === currentAnswer)
          )
        ),
      2000
    );
  });

export const useQuestions = (questions, userdata) => {
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (userdata) setUserAnswers(userdata);
  }, [userdata]);

  useEffect(() => {
    setQuestion(getStartQuestion(questions));
  }, [questions]);

  const submitAnswer = async () => {
    setLoading(true);

    const nextQuestion = await getNextQuestion(
      question,
      answer,
      questions,
      userAnswers
    );

    if (nextQuestion) {
      setQuestion(nextQuestion);
      setUserAnswers({
        ...userAnswers,
        [question.answer.propertyName]: answer,
      });
    } else {
      setIsComplete(true);
    }
    setLoading(false);
  };

  return {
    question,
    userAnswers,
    loading,
    isComplete,
    setAnswer,
    submitAnswer,
  };
};
