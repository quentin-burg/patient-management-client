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

interface CreateFileProps {
  create({ parity, gravidity, patientEmail }: { parity: number; gravidity: number; patientEmail: string }): void;
}

const CreateFile = ({ create }: CreateFileProps) => {
  const [parity, setParity] = useState<number>(0);
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [gravidity, setGravidity] = useState<number>(0);
  return (
    <Container>
      <Input type="number" id="parity" onChange={setParity} value={parity} label="Parité" required />
      <Input type="number" id="gravidity" onChange={setGravidity} value={gravidity} label="Gestité" required />
      <Input
        type="email"
        id="patientEmail"
        onChange={setPatientEmail}
        value={patientEmail}
        label="Email du patient"
        required
      />
      <Button title="Valider" onSubmit={() => create({ parity, patientEmail, gravidity })} disabled={!patientEmail} />
    </Container>
  );
};

export default CreateFile;
