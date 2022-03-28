import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../actions/user';

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
