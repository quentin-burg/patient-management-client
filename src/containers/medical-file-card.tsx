import { connect } from 'react-redux';
import MedicalFileCard, { MedicalFileCardProps } from '../components/medical-file-card';
import { State } from 'src/shared.types';
import { getUser } from '../reducers';

const mapStateToProps = (state: State, ownProps: MedicalFileCardProps) => {
  const patient = getUser(state, ownProps.patientId);
  const professional = getUser(state, ownProps.professionalId);
  return {
    patient,
    professional,
  };
};

export default connect(mapStateToProps, null)(MedicalFileCard);
