import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

interface RadioProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange(e: any): void;
}

const Radio = ({ name, label, value, checked, onChange }: RadioProps) => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <InputStyle onChange={onChange} type="radio" name={name} value={value} checked={checked} />
    </Container>
  );
};

export default Radio;
