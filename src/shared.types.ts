import { ConsultationState } from './reducers/consultation/consultation.types';
import { UserState } from './reducers/user/user.types';
import { FileState } from './reducers/medical-file/medical-file.types';

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  isPatient: boolean;
  isProfessional: boolean;
};

export type Consultation = {
  id: string;
  report: string;
  term: { week: number; day: number };
  images: string[];
  medicalFileId: string;
};

export type MedicalFile = {
  id: string;
  patientId: string;
  professionalId: string;
  parity: number;
  gravidity: number;
  consultations: Consultation[];
  patient: User;
  professional: User;
};

export type State = {
  user: UserState;
  file: FileState;
  consultation: ConsultationState;
};
