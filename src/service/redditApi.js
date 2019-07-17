import request from '../utils/request';

export async function getRedditLastEntries() {
  return request('https://www.reddit.com/top/.json?count=50', {
    method: 'GET',
  });
}
