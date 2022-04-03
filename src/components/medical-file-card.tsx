import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from '../shared.types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px black solid;
  margin: 5px;
  justify-content: space-around;
  font-size: 14px;
  width: 500px;
`;

const UserInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OthersInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Name = styled.p`
  font-weight: bold;
  margin-left: 3px;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export interface MedicalFileCardProps {
  patientId: string;
  professionalId: string;
  gravidity: number;
  parity: number;
  id: string;
  patient?: User;
  professional?: User;
}

const MedicalFileCard = ({ id, parity, gravidity, professional, patient }: MedicalFileCardProps) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/file?fileId=${id}`)}>
      <UserInfosContainer>
        {professional && (
          <Label>
            <p>Professionel : </p>
            <Name>{`${professional.firstname} ${professional.lastname}`}</Name>
          </Label>
        )}
        {patient && (
          <Label>
            <p>Patient : </p> <Name>{`${patient.firstname} ${patient.lastname}`}</Name>
          </Label>
        )}
      </UserInfosContainer>
      <OthersInfosContainer>
        <div>Parité : {parity}</div>
        <div>Gestité : {gravidity}</div>
      </OthersInfosContainer>
    </Container>
  );
};

export default MedicalFileCard;
