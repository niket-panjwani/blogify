import { useState, useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { name } = await fetchUserAttributes();
        setCurrentUser(name);
      } catch (error) {
        console.error("Error fetching current user", error);
        setCurrentUser(null);
      }
    };

    fetchUser();
  }, []);

  return currentUser;
};

export default useCurrentUser;
