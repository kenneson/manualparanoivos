import { PrismaClient, Lead } from '@prisma/client';

// Verifica se já existe uma instância do Prisma Client no globalThis (para evitar múltiplas instâncias em desenvolvimento)
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Exporta o Prisma Client, reutilizando a instância existente ou criando uma nova
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Em desenvolvimento, adiciona o Prisma Client ao globalThis para reutilização
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Exporta os tipos do Prisma
export type { Lead };