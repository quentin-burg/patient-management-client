import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';

const Home = ({}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>coucou</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default Home;
