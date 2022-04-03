import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './containers/login';
import Home from './containers/home';
import store from './store';
import history from './history';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import Register from './containers/register';
import CreateFile from './containers/create-file';
import MedicalFiles from './containers/medical-files';
import MedicalFile from './containers/medical-file';
import AddConsultation from './containers/add-consultation';
import Consultation from './containers/consultation';

const App = () => (
  <Provider store={store}>
    <ReduxRouter history={history} store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/files" element={<MedicalFiles />} />
        <Route path="/create-file" element={<CreateFile />} />
        <Route path="/file" element={<MedicalFile />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/add-consultation" element={<AddConsultation />} />
      </Routes>
    </ReduxRouter>
  </Provider>
);

export default App;
