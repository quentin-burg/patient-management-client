import { Consultation } from '../../shared.types';

export type ConsultationState = {
  consultations: { [key: string]: Consultation };
};

export const defaultConsultationState: ConsultationState = {
  consultations: {},
};
