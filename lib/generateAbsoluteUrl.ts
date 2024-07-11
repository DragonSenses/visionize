/**
 * Generates an absolute URL by prepending the app's base URL to the provided path.
 * @param {string} path The relative path to append to the base URL.
 * @returns The absolute URL.
 */
export function generateAbsoluteUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
