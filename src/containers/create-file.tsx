import { connect } from 'react-redux';
import CreateFile from '../components/create-file';
import { create } from '../actions/medical-file';

const mapDispatchToProps = {
  create,
};

export default connect(null, mapDispatchToProps)(CreateFile);
