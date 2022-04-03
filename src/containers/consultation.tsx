import { connect } from 'react-redux';
import Consultation from '../components/consultation';
import { State } from 'src/shared.types';
import { getConsultationById } from '../reducers';

const mapStateToProps = (state: State) => {
  const getConsultation = (id: string) => getConsultationById(state, id);
  return {
    getConsultation,
  };
};

export default connect(mapStateToProps)(Consultation);
