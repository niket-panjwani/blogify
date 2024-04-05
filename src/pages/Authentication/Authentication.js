import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import slugify from 'slugify';

const Authentication = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const navigateToDashboard = async () => {
      if (getCurrentUser() !== null) {
        const { name } = await fetchUserAttributes();
        const slug = slugify(name, {lower: true, strict: true, replacement: '-'});
        navigate(`/${slug}/dashboard`);
      }
    }
    navigateToDashboard();
  });
  return;
}

export default withAuthenticator(Authentication);
