import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const InputStyle = styled.input`
  background: #ecf0f1;
  border: #000 1px solid;
  padding: 8px;
  color: #000;
  margin-top: 10px;
  font-size: 1em;
  border-radius: 4px;
`;

const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`;

interface PasswordInputProps {
  onChange(text: string): void;
  password: string;
}

const PasswordInput = ({ password, onChange }: PasswordInputProps) => {
  return (
    <Container>
      <Label htmlFor="email">Mot de passe</Label>
      <InputStyle
        type="password"
        id="password"
        size={30}
        minlength="8"
        required
        value={password}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  );
};

export default PasswordInput;
