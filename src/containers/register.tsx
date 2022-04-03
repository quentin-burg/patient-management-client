import { connect } from 'react-redux';
import Register from '../components/register';
import { register } from '../actions/user';

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Register);
