import styled from 'styled-components';

const ButtonStyle = styled.button<{ size?: number }>`
  background: ${props => (props.disabled ? '#d6d6d6 ' : '#aaa')};
  width: ${props => (props.size ? `${props.size}px` : '125px')};
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => (props.disabled ? 'white' : 'black')};
  border-radius: 4px;
  border: ${props => (props.disabled ? 'white' : '#000')} 1px solid;

  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 0.8em;
`;

interface ButtonProps {
  onSubmit(): void;
  title: string;
  size?: number;
  disabled: boolean | undefined;
}

const Button = ({ disabled, onSubmit, title, size }: ButtonProps) => {
  return (
    <ButtonStyle disabled={disabled} size={size} onClick={onSubmit}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
