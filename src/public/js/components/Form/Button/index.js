import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  background: transparent;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;

Button.defaultProps = {
  isHidden: false,
};

Button.propTypes = {
  isHidden: PropTypes.bool,
};
