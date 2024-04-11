import { get, post } from '@aws-amplify/api';

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

export const registerSubdomain = async (data) => {
  try{
    const body = { "subdomain": "niket" }
    const restOperation  = post({
      apiName: 'createSubdomainApi', 
      path: '/12345/register/subdomain',
      options: {
        body: body
      }
    });
    const response = await restOperation.response;
    const data = await response.body.json();
    return data;
  } catch {
    console.error('Error creating subdomain');
  }
}