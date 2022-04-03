import { Consultation, MedicalFile as MedicalFileType } from '../shared.types';
import styled from 'styled-components';
import ConsultationCard from './consultation-card';
import Button from './button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUser } from '../reducers';
import { useAppSelector } from '../hooks';

const Container = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-around;
  font-size: 14px;
  flex-direction: column;
`;

const UserInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OthersInfosContainer = styled.div`
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

const ConsultationsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface MedicalFileProps {
  getFile(id: string): Omit<MedicalFileType, 'patient' | 'professional'>;
  getAllConsultations(id: string): void;
  consultations: Consultation[];
}

const MedicalFile = ({ getFile, getAllConsultations, consultations = [] }: MedicalFileProps) => {
  const navigate = useNavigate();
  let [searchParams, _] = useSearchParams();
  const fileId = searchParams.get('fileId');
  const file = fileId ? getFile(fileId) : null;

  useEffect(() => {
    if (!file) navigate('/');
    if (fileId) getAllConsultations(fileId);
  }, []);

  const patient = file ? useAppSelector(state => getUser(state, file.patientId)) : null;
  const professional = file ? useAppSelector(state => getUser(state, file.professionalId)) : null;
  return (
    <>
      <Container>
        <ButtonsContainer>
          <Button title="Retour" onSubmit={() => navigate(-1)} disabled={false} />
          <Button
            title="Ajouter une consultation"
            disabled={false}
            onSubmit={() => navigate(`/add-consultation?fileId=${fileId}`)}
          />
        </ButtonsContainer>
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
          <div>Parité : {file?.parity}</div>
          <div>Gestité : {file?.gravidity}</div>
        </OthersInfosContainer>
      </Container>
      <ConsultationsContainer>
        {file &&
          consultations.map(c => <ConsultationCard key={c.id} term={c.term} id={c.id} patientId={file.patientId} />)}
      </ConsultationsContainer>
    </>
  );
};

export default MedicalFile;
