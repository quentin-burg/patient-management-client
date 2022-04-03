import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MedicalFile as MedicalFileType } from '../shared.types';
import Button from './button';
import MedicalFileCard from '../containers/medical-file-card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilesContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface MedicalFilesProps {
  files: Omit<MedicalFileType, 'patient' | 'professional'>[];
  getAllFiles(): void;
  logout(): void;
  role: 'patient' | 'professional';
}

const MedicalFiles = ({ files, getAllFiles, logout, role }: MedicalFilesProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    getAllFiles();
  }, []);
  return (
    <Container>
      <ButtonsContainer>
        {role === 'professional' && (
          <Button title="Créer un dossier" onSubmit={() => navigate('/create-file')} disabled={false} />
        )}
        <Button title="Se déconnecter" onSubmit={() => logout()} disabled={false} />
      </ButtonsContainer>
      <FilesContainer>
        {files.map(file => (
          <MedicalFileCard {...file} key={file.id} />
        ))}
      </FilesContainer>
    </Container>
  );
};

export default MedicalFiles;
