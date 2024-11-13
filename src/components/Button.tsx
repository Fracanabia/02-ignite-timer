import { ButtonContainer, ButtonVariant } from './Button.styled';

interface ButtonProps {
  variant?: ButtonVariant;
}
export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Button</ButtonContainer>;
};
