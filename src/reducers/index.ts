import { State } from '../shared.types';
import * as fromUser from './user/user';
import * as fromConsultation from './consultation/consultation';
import * as fromFile from './medical-file/medical-file';

export const getToken = (state: State) => fromUser.getToken(state.user);
export const getRole = (state: State) => fromUser.getRole(state.user);
export const isConnected = (state: State) => fromUser.isConnected(state.user);
export const getUser = (state: State, id: string) => fromUser.getUser(state.user, id);

export const getAllFiles = (state: State) => fromFile.getAllFiles(state.file);
export const getFileById = (state: State, id: string) => fromFile.getFileById(state.file, id);

export const getConsultationById = (state: State, id: string) =>
  fromConsultation.getConsultationById(state.consultation, id);

export const getAllConsultations = (state: State) => fromConsultation.getAllConsultations(state.consultation);
