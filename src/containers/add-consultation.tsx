import { connect } from 'react-redux';
import AddConsultation from '../components/add-consultation';
import { addConsultation } from '../actions/consultation';

const mapDispatchToProps = {
  addConsultation,
};

export default connect(null, mapDispatchToProps)(AddConsultation);
