import { Consultation } from '../shared.types';

type AddConsultationCommit = {
  type: 'ADD_CONSULTATION_COMMIT';
  payload?: { consultation: Consultation };
};

type AddConsultationRollback = {
  type: 'ADD_CONSULTATION_ROLLBACK';
};

export type AddConsultationBody = {
  medicalFileId: string;
  term: string;
  images?: string[];
  report?: string;
};

export type AddConsultationRequest = {
  type: 'ADD_CONSULTATION_REQUEST';
  meta: {
    path: '/consultation';
    method: 'POST';
    body: AddConsultationBody;
  };
  commit: AddConsultationCommit;
  rollback: AddConsultationRollback;
};

type AddConsultation = AddConsultationCommit | AddConsultationRollback | AddConsultationRequest;

type GetAllConsultationsByFileIdCommit = {
  type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_COMMIT';
  payload?: { consultations: Consultation[] };
};

type GetAllConsultationsByFileIdRollback = {
  type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_ROLLBACK';
};

export type GetAllConsultationsByFileIdRequest = {
  type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_REQUEST';
  meta: {
    path: string;
    method: 'GET';
  };
  commit: GetAllConsultationsByFileIdCommit;
  rollback: GetAllConsultationsByFileIdRollback;
};

type GetAllConsultationsByFileId =
  | GetAllConsultationsByFileIdRequest
  | GetAllConsultationsByFileIdCommit
  | GetAllConsultationsByFileIdRollback;

export type ConsultationActions = AddConsultation | GetAllConsultationsByFileId;
