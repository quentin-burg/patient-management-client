import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  border: 1px black solid;
  width: 300px;
  height: 30px;
  margin: 10px;
`;

interface ConsultationCardProps {
  term: { week: number; day: number };
  patientId: string;
  id: string;
}

const ConsultationCard = ({ term, patientId, id }: ConsultationCardProps) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/consultation?patientId=${patientId}&id=${id}`)}
    >{`Consultation à terme ${term.week}+${term.day}SA`}</Container>
  );
};

export default ConsultationCard;
