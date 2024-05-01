/**
 * Fetches data from the specified URL and returns the parsed JSON response.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} - A Promise that resolves to the parsed JSON data.
 */
export const fetcher = (url: string) => fetch(url)
  .then((res) => res.json());
