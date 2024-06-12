import React from 'react';
import { auth } from '@clerk/nextjs/server';

import URLMatcher from './_components/URLMatcher';

/**
 * Takes a string (usually in camel case, snake case, or kebab case) 
 * and returns a new string where each word starts with an uppercase 
 * letter, and words are separated by spaces.
 * @param input the input string to convert to
 * @returns the input string in startCase form
 */
function startCase(input: string): string {
  // Convert the input string to lowercase
  const lowerCaseInput = input.toLowerCase();

  // Split the string into words, using regex
  // (/\s+/ matches one or more whitespace characters)
  const words = lowerCaseInput.split(/\s+/);

  // Capitalize the first letter of each word
  const startCasedWords = words.map((word) => word.charAt(0).
      toUpperCase() + word.slice(1)
  );

  // Join the words back together with spaces
  return startCasedWords.join(' ');
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || 'your group'),
  }
}

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <URLMatcher />
      {children}
    </>
  )
}
