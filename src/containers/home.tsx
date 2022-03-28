import { connect } from 'react-redux';
import { isConnected } from '../reducers/login/login';
import Home from '../components/home';

const mapStateToProps = state => ({
  isConnected: isConnected(state.login),
});

export default connect(mapStateToProps)(Home);
