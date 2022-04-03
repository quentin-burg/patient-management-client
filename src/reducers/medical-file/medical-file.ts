import { compose } from 'redux';
import { Cmd, liftState, loop, Loop } from 'redux-loop';
import { cmdFetch } from '../../infra/api';
import { FileActions } from '../../actions/medical-file.types';
import { defaultFileState, FileState } from './medical-file.types';
import { MedicalFile } from '../../shared.types';
import { push } from '@lagunovsky/redux-react-router';

const toFiles = (files: MedicalFile[]) => {
  const s = {};
  const result = files.map(toFile);
  result.forEach(f => {
    s[f.id] = f;
  });
  return s;
};

const toFile = (file: MedicalFile) => {
  return {
    id: file.id,
    gravidity: file.gravidity,
    parity: file.parity,
    professionalId: file.professionalId,
    patientId: file.patientId,
    consultations: file.consultations,
  };
};

const reducer = (state: FileState, action: FileActions): FileState | Loop<FileState> => {
  if (!state) return defaultFileState;
  switch (action.type) {
    case 'CREATE_MEDICAL_FILE_COMMIT':
      if (action.payload) {
        return loop(
          { ...state, files: { ...state.files, [action.payload.file.id]: toFile(action.payload.file) } },
          Cmd.list([Cmd.action(push('/files'))]),
        );
      }
      return state;
    case 'GET_ALL_MEDICAL_FILES_COMMIT':
      if (action.payload) {
        return { ...state, files: toFiles(action.payload.files) };
      }
      return state;
    case 'CREATE_MEDICAL_FILE_REQUEST':
    case 'GET_ALL_MEDICAL_FILES_REQUEST':
      return loop(state, cmdFetch(action));
    default:
      return state;
  }
};

export const getAllFiles = (state: FileState) => Object.values(state.files);
export const getFileById = (state: FileState, id: string) => state.files[id];

export default compose(liftState, reducer);
