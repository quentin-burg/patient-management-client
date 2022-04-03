import { connect } from 'react-redux';
import Files from '../components/medical-files';
import { getAll } from '../actions/medical-file';
import { State } from '../shared.types';
import { getAllFiles, getRole } from '../reducers';
import { logout } from '../actions/user';

const mapStateToProps = (state: State) => ({
  files: getAllFiles(state),
  role: getRole(state) as 'patient' | 'professional',
});

const mapDispatchToProps = {
  getAllFiles: getAll,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
