import { AddConsultationBody, AddConsultationRequest, GetAllConsultationsByFileIdRequest } from './consultation.types';

export const addConsultation = ({ term, medicalFileId }: AddConsultationBody): AddConsultationRequest => ({
  type: 'ADD_CONSULTATION_REQUEST',
  meta: {
    path: '/consultation',
    method: 'POST',
    body: {
      term,
      medicalFileId,
    },
  },
  commit: { type: 'ADD_CONSULTATION_COMMIT' },
  rollback: { type: 'ADD_CONSULTATION_ROLLBACK' },
});

export const getAllConsultationsByFileId = (fileId: string): GetAllConsultationsByFileIdRequest => ({
  type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_REQUEST',
  meta: {
    path: `/consultation/${fileId}`,
    method: 'GET',
  },
  commit: {
    type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_COMMIT',
  },
  rollback: {
    type: 'GET_ALL_CONSULTATIONS_BY_FILE_ID_ROLLBACK',
  },
});
