import styled, { css } from 'styled-components';

export const LabelText = styled.span`
  display: block;
  margin-bottom: 16px;
  line-height: 24px;
  text-align: center;
`;

export const BaseControl = styled.input`
  display: block;
  border: 1px solid lightgrey;
  padding: 8px 8px 8px 8px;
  width: 100%;
  line-height: 16px;
  text-align: center;

  &:invalid {
    ${({ isTouched }) => (isTouched ? `border-color: red` : '')};
  }
`;

export const HelperText = styled.span`
  display: block;
  visibility: hidden;
  margin-top: 8px;
  margin-left: 12px;
  line-height: 16px;
  text-align: center;
  color: red;
`;

LabelText.defaultProps = {
  as: 'span',
  colorToken: 'type.prominent',
  typeIdentity: 'utility.interactive.label',
};

HelperText.defaultProps = {
  as: 'span',
  colorToken: 'type.deemphasized',
  typeIdentity: 'utility.meta.secondary',
};

export const ControlWrap = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 32px;
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  paddingwidth: 100%;

  ${({ isTouched }) =>
    isTouched
      ? css`
          ${BaseControl}:invalid + ${HelperText} {
            visibility: visible;
          }
        `
      : ''}
`;
