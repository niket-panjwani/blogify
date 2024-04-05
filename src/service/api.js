import { get } from '@aws-amplify/api';

export const fetchUserStats = async () => { 
  try{
    const restOperation  = get({apiName: 'blogifyUserStats', path: '/12345/stats'});
    const response = await restOperation.response;
    const data = await response.body.json();
    const stats = data.data;
    return stats
  } catch {
    console.error('Error fetching user stats');
  }
}

export const updateUserStats = async (data) => {
}