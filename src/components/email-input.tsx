import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10px;
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

interface EmailInputProps {
  onChange(text: string): void;
  email: string;
}

const EmailInput = ({ onChange, email }: EmailInputProps) => {
  return (
    <Container>
      <Label htmlFor="email">Email</Label>
      <InputStyle
        type={'email'}
        id="email"
        pattern=".+@.+.com"
        size={30}
        required
        placeholder="xzz@gmail.com"
        onChange={e => onChange(e.target.value)}
        value={email}
      />
    </Container>
  );
};

export default EmailInput;
