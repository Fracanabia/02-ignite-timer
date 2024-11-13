import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  margin: 8px;
  border-radius: 4px;
  color: #fff;

  ${(props) => {
    return css`
      background-color: ${props.theme['green-500']};
    `;
  }}/* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
