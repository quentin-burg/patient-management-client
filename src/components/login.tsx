import Button from './button';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './input';

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
      <Input
        required
        type="email"
        id="email"
        onChange={setEmail}
        value={email}
        placeholder="xyz@gmail.com"
        label="Email"
      />
      <Input required type="password" id="password" onChange={setPassword} value={password} label="Mot de passe" />
      <Button title="Se connecter" onSubmit={() => login({ email, password })} disabled={false} />
    </Container>
  );
};

export default Login;
