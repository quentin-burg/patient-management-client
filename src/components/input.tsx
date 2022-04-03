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

interface InputProps {
  onChange(value: unknown): void;
  value: string | number;
  type: 'email' | 'password' | 'text' | 'number';
  placeholder?: string;
  label: string;
  id: string;
  required?: boolean;
}

const Input = ({ onChange, value, type, placeholder, label, id, required }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{`${label} ${required ? '*' : ''}`}</Label>
      <InputStyle
        type={type}
        id={id}
        size={30}
        required
        min={0}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </Container>
  );
};

export default Input;
