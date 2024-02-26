import { createApi } from 'unsplash-js';

/* Create API object from unsplash-js library, to access and manipulate photos
from https://unsplash.com
 */
export const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
});

/** 
 * 
 * @see https://github.com/unsplash/unsplash-js?tab=readme-ov-file#usage
*/
/* 

// on your node server
const serverApi = createApi({
  accessKey: 'MY_ACCESS_KEY',
  //...other fetch options
});

// in the browser
const browserApi = createApi({
  apiUrl: 'https://mywebsite.com/unsplash-proxy',
  //...other fetch options
});

*/