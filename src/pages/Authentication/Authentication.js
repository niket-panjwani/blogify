import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

const Authentication = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getCurrentUser() !== null) {
      navigate('/dashboard');
    }
  });
  return;
}

export default withAuthenticator(Authentication);
