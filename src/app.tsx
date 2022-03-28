import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './containers/login';
import Home from './containers/home';
import store from './store';
import history from './history';
import { ReduxRouter } from '@lagunovsky/redux-react-router';

const App = () => (
  <Provider store={store}>
    <ReduxRouter history={history} store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ReduxRouter>
  </Provider>
);

export default App;
