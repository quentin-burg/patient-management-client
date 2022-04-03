import styled from 'styled-components';
import Radio from './radio';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
`;

const Label = styled.label`
  font-size: 12px;
`;

interface ChoiceProps {
  role: 'professional' | 'patient';
  onChange(role: 'professional' | 'patient'): void;
}

const Choice = ({ role, onChange }: ChoiceProps) => {
  return (
    <Container>
      <Label>{'Vous êtes un ...'}</Label>
      <RadioContainer>
        <Radio
          onChange={e => onChange(e.target.value)}
          value="professional"
          label="Professionel"
          name="role"
          checked={role === 'professional'}
        />
        <Radio
          onChange={e => onChange(e.target.value)}
          value="patient"
          label="Patient"
          name="role"
          checked={role === 'patient'}
        />
      </RadioContainer>
    </Container>
  );
};

export default Choice;
