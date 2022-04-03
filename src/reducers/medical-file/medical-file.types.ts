import { MedicalFile } from '../../shared.types';

export type FileState = {
  files: { [key: string]: Omit<MedicalFile, 'patient' | 'professional'> };
};

export const defaultFileState: FileState = {
  files: {},
};
