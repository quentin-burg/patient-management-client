import { CreateRequest, GetAllRequest } from './medical-file.types';

export const create = ({ parity, gravidity, patientEmail }): CreateRequest => ({
  type: 'CREATE_MEDICAL_FILE_REQUEST',
  meta: {
    path: '/medical-file',
    method: 'POST',
    body: { parity, gravidity, patientEmail },
  },
  commit: { type: 'CREATE_MEDICAL_FILE_COMMIT' },
  rollback: { type: 'CREATE_MEDICAL_FILE_ROLLBACK' },
});

export const addConsultation = () => {};

export const getAll = (): GetAllRequest => ({
  type: 'GET_ALL_MEDICAL_FILES_REQUEST',
  meta: {
    path: '/medical-file',
    method: 'GET',
  },
  commit: {
    type: 'GET_ALL_MEDICAL_FILES_COMMIT',
  },
  rollback: {
    type: 'GET_ALL_MEDICAL_FILES_ROLLBACK',
  },
});

export const get = () => {};
