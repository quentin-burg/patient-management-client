import { useNavigate } from 'react-router-dom';

interface HomeProps {
  isConnected: boolean;
}

const Home = ({ isConnected }: HomeProps) => {
  const navigate = useNavigate();
  console.log('is', isConnected);
  return isConnected ? <div>Welcome !</div> : <div onClick={() => navigate('/login')}>Connexion</div>;
};

export default Home;
