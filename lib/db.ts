// Import Prisma Client from @prisma/client
import { PrismaClient } from '@prisma/client';

// Declare a global variable prisma of type PrismaClient or undefined
declare global {
  var prisma: PrismaClient | undefined;
};

// Export a db variable that is either the existing global prisma instance or a new one
export const db = globalThis.prisma || new PrismaClient();

// If the environment is not production, assign the db variable to the global prisma variable
if(process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

/* This code is a way to prevent creating multiple instances of 
Prisma Client in your application, which can lead to performance
issues or errors. */