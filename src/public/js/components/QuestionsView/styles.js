import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const slidein = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  ${({ animateIn, animateInTime }) =>
    animateIn &&
    css`
      animation: ${slidein} ${animateInTime}ms ease-in-out;
      will-change: transform;
    `}
`;

QuestionContainer.propTypes = {
  animateIn: PropTypes.bool,
  animateInTime: PropTypes.number,
};

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

export const ButtonContainer = styled(QuestionContainer)`
  align-items: center;
  min-height: 74px;
`;
