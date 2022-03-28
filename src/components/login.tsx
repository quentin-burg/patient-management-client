import Button from './button';
import EmailInput from './email-input';
import PasswordInput from './password-input';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  margin: 200px auto;
  background-color: #87cdfa;
  padding: 20px;
  width: 300px;
  border-radius: 15px;
`;

interface LoginProps {
  login({ email, password }: { email: string; password: string }): void;
}

const Login = ({ login }: LoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Container>
      <EmailInput email={email} onChange={setEmail} />
      <PasswordInput password={password} onChange={setPassword} />
      <Button title="Se connecter" onSubmit={() => login({ email, password })} />
    </Container>
  );
};

export default Login;
