import { Consultation as ConsultationType } from '../shared.types';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import Button from './button';
import { useAppSelector } from '../hooks';
import { getUser } from '../reducers';

// ["https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"],

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const Report = styled.p`
  width: 400px;
  height: 300px;
  overflow-wrap: anywhere;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  max-width: 250px;
  max-heigth: 250px;
  margin: 10px;
`;

interface ConsultationProps {
  getConsultation(id: string): ConsultationType;
}

const Consultation = ({ getConsultation }: ConsultationProps) => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const patientId = searchParams.get('patientId');
  const consultationId = searchParams.get('id');
  const consultation = consultationId ? getConsultation(consultationId) : null;

  useEffect(() => {
    if (!consultation) navigate('/');
  });

  const patient = patientId ? useAppSelector(state => getUser(state, patientId)) : null;

  const displayTerm = useCallback(() => `${consultation?.term.week}+${consultation?.term.day}SA`, [consultation]);
  return (
    <>
      <Button title="Retour" onSubmit={() => navigate(-1)} disabled={false} />
      <Container>
        <UserInfosContainer>
          {patient && (
            <Label>
              <p>Patient : </p>
              <Name>{`${patient.firstname} ${patient.lastname}`}</Name>
            </Label>
          )}
          <Label>
            <p>Terme : </p> <Name>{displayTerm()}</Name>
          </Label>
          <Report>{consultation?.report}</Report>
        </UserInfosContainer>
        <ImagesContainer>
          {consultation?.images.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </Container>
    </>
  );
};

export default Consultation;
