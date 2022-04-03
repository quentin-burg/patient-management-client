import { connect } from 'react-redux';
import MedicalFile from '../components/medical-file';
import { State } from 'src/shared.types';
import { getAllConsultations, getFileById } from '../reducers';
import { getAllConsultationsByFileId } from '../actions/consultation';

const mapStateToProps = (state: State) => {
  const getFile = (id: string) => getFileById(state, id);
  const consultations = getAllConsultations(state);
  return {
    getFile,
    consultations,
  };
};

const mapDispatchToProps = {
  getAllConsultations: (id: string) => getAllConsultationsByFileId(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFile);
