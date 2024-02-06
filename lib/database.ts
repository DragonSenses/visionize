import { PrismaClient } from '@prisma/client'

/** 
 * Instantiate Prisma Client by defining a global prisma instance.
 *  
 * This code is a way to prevent creating multiple instances of 
 * Prisma Client in your application, which can lead to performance
 * issues or errors.
*/

// Declare a global variable prisma of type PrismaClient or undefined
declare global {
  var prisma: PrismaClient | undefined;
};

// Export a database variable that is either the existing global prisma instance or a new one
export const database = globalThis.prisma || new PrismaClient();

// If the environment is not production, assign the database variable to the global prisma variable
if(process.env.NODE_ENV !== "production") {
  globalThis.prisma = database;
}

/**
 * Prisma Client - Querying the database
 * @see https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql
 */

// const prisma = new PrismaClient()

/*  
async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

*/