import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  isConnected: boolean;
}

const Home = ({ isConnected }: HomeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) navigate('/files');
  }, [isConnected]);

  return (
    <>
      <button onClick={() => navigate('login')}>Connexion</button>
      <button onClick={() => navigate('register')}>Créer un compte</button>
    </>
  );
};

export default Home;
