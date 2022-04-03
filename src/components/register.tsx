import Button from './button';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './input';
import Choice from './choice';

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

const PasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

interface RegisterProps {
  register({
    email,
    password,
    firstname,
    lastname,
    isPatient,
    isProfessional,
  }: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    isProfessional: boolean;
    isPatient: boolean;
  }): void;
}

const Register = ({ register }: RegisterProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState<'professional' | 'patient'>('professional');
  const disabled = !email || !password || !firstname || !lastname;
  return (
    <Container>
      <Input type="email" id="email" onChange={setEmail} value={email} placeholder="xyz@gmail.com" label="Email" />
      <PasswordContainer>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          onChange={setPassword}
          value={password}
          label="Mot de passe"
        />
        <Button disabled={false} size={45} title="Voir" onSubmit={() => setShowPassword(!showPassword)} />
      </PasswordContainer>
      <Input type="text" id="firstname" onChange={setFirstname} value={firstname} label="Prénom" />
      <Input type="text" id="lastname" onChange={setLastname} value={lastname} label="Nom" />
      <Choice role={role} onChange={setRole} />
      <Button
        disabled={disabled}
        title="S'inscrire"
        onSubmit={() =>
          register({
            email,
            password,
            firstname,
            lastname,
            isPatient: role === 'patient',
            isProfessional: role === 'professional',
          })
        }
      />
    </Container>
  );
};

export default Register;
