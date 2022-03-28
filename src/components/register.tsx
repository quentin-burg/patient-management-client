import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Label = styled.div`
  text-align: center;
`;

const RegisterNotDefined = ({ setUserType }) => (
  <>
    <Label>Vous êtes un ...</Label>
    <ButtonContainer>
      <Button onClick={() => setUserType('professional')}>Professionnel</Button>
      <Button onClick={() => setUserType('patient')}>Patient</Button>
    </ButtonContainer>
  </>
);

const RegisterProfessional = () => <>PRO</>;
const RegisterPatient = () => <>PATIENT</>;

const Register = () => {
  const [userType, setUserType] = useState<'professional' | 'patient' | undefined>();

  return (
    <Container>
      {userType === 'professional' ? (
        <RegisterProfessional />
      ) : userType === 'patient' ? (
        <RegisterPatient />
      ) : (
        <RegisterNotDefined setUserType={setUserType} />
      )}
    </Container>
  );
};

export default Register;
