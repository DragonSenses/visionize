import { PrismaClient } from '@prisma/client'

/** 
 * Instantiate Prisma Client by defining a global prisma instance.
 *  
 * This code is a way to prevent creating multiple instances of 
 * Prisma Client in your application, which can lead to performance
 * issues or errors.
 * 
 * @link https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
*/
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Declare a global variable prisma of type PrismaClient or undefined
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Export a database variable that is either the existing global prisma instance or a new one
// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
export const database = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma
// export default database

// If the environment is not production, assign the database variable to the global prisma variable
// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = database
