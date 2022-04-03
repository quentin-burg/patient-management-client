import { compose } from 'redux';
import { Cmd, liftState, loop, Loop } from 'redux-loop';
import { cmdFetch } from '../../infra/api';
import { defaultConsultationState, ConsultationState } from './consultation.types';
import { Consultation } from '../../shared.types';
import { push } from '@lagunovsky/redux-react-router';
import { ConsultationActions } from '../../actions/consultation.types';

const toConsultations = (consultations: Consultation[]) => {
  const s = {};
  consultations.forEach(c => {
    s[c.id] = c;
  });
  return s;
};

const reducer = (
  state: ConsultationState,
  action: ConsultationActions,
): ConsultationState | Loop<ConsultationState> => {
  if (!state) return defaultConsultationState;
  switch (action.type) {
    case 'ADD_CONSULTATION_COMMIT':
      if (action.payload) {
        return loop(
          {
            ...state,
            consultations: { ...state.consultations, [action.payload.consultation.id]: action.payload.consultation },
          },
          Cmd.action(push(`/file?fileId=${action.payload.consultation.medicalFileId}`)),
        );
      }
      return state;
    case 'GET_ALL_CONSULTATIONS_BY_FILE_ID_COMMIT':
      if (action.payload) {
        return { ...state, consultations: toConsultations(action.payload.consultations) };
      }
      return state;
    case 'ADD_CONSULTATION_REQUEST':
    case 'GET_ALL_CONSULTATIONS_BY_FILE_ID_REQUEST':
      return loop(state, cmdFetch(action));
    default:
      return state;
  }
};

export const getConsultationById = (state: ConsultationState, id: string) => state.consultations[id];
export const getAllConsultations = (state: ConsultationState) => Object.values(state.consultations);
export default compose(liftState, reducer);
