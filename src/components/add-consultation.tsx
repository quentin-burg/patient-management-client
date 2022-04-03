import Button from './button';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './input';
import { AddConsultationBody } from '../actions/consultation.types';
import { useParams, useSearchParams } from 'react-router-dom';

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

interface AddConsultationProps {
  addConsultation(args: AddConsultationBody): void;
}

const AddConsultation = ({ addConsultation }: AddConsultationProps) => {
  const [report, setReport] = useState<string>('');
  // const [term, setTerm] = useState<string>('');
  const [week, setWeek] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  let [searchParams, _] = useSearchParams();
  const fileId = searchParams.get('fileId');
  if (!fileId) return null;
  return (
    <Container>
      <Input type="text" id="report" onChange={setReport} value={report} label="Compte-rendu" />
      <>
        <Input type="number" id="week" onChange={setWeek} value={week} label="Semaine" required />
        <Input type="number" id="day" onChange={setDay} value={day} label="Jour" required />
      </>
      <Button
        title="Valider"
        onSubmit={() =>
          addConsultation({
            medicalFileId: fileId,
            term: `${week}+${day}`,
            images: [],
            report,
          })
        }
        disabled={week < 0 || day < 0}
      />
    </Container>
  );
};

export default AddConsultation;
