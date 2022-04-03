import { MedicalFile } from '../shared.types';

type CreateCommit = {
  type: 'CREATE_MEDICAL_FILE_COMMIT';
  payload?: { file: MedicalFile };
};

type CreateRollback = {
  type: 'CREATE_MEDICAL_FILE_ROLLBACK';
};

type CreateBody = {
  parity: number;
  gravidity: number;
  patientEmail: string;
};

export type CreateRequest = {
  type: 'CREATE_MEDICAL_FILE_REQUEST';
  meta: {
    path: '/medical-file';
    method: 'POST';
    body: CreateBody;
  };
  commit: CreateCommit;
  rollback: CreateRollback;
};

type Create = CreateRequest | CreateCommit | CreateRollback;

type GetAllCommit = {
  type: 'GET_ALL_MEDICAL_FILES_COMMIT';
  payload?: { files: MedicalFile[] };
};

type GetAllRollback = {
  type: 'GET_ALL_MEDICAL_FILES_ROLLBACK';
};

export type GetAllRequest = {
  type: 'GET_ALL_MEDICAL_FILES_REQUEST';
  meta: {
    path: '/medical-file';
    method: 'GET';
  };
  commit: GetAllCommit;
  rollback: GetAllRollback;
};

export type GetAll = GetAllRequest | GetAllCommit | GetAllRollback;

export type FileActions = Create | GetAll;
