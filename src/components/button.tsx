import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const ButtonStyle = styled.button`
  background: #aaa;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #000 1px solid;

  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 0.8em;
  color: black;
`;

interface ButtonProps {
  onSubmit(): void;
  title: string;
}

const Button = ({ onSubmit, title }: ButtonProps) => {
  return (
    <Container>
      <ButtonStyle onClick={onSubmit}>{title}</ButtonStyle>
    </Container>
  );
};

export default Button;
