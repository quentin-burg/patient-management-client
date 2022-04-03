import { connect } from 'react-redux';
import { isConnected } from '../reducers';
import Home from '../components/home';

const mapStateToProps = state => ({
  isConnected: isConnected(state),
});

export default connect(mapStateToProps)(Home);
