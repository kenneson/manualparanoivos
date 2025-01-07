'use server';

import { prisma, Lead } from '@/lib/prisma'; // Importa o Prisma Client e o tipo Lead

export async function createLead(formData: FormData): Promise<{ message: string; lead?: Lead }> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    try {
        // Insere o lead no banco de dados
        const lead = await prisma.lead.create({
            data: {
                name,
                email,
            },
        });

        return { message: 'Cadastrado com sucesso!', lead };
    } catch (error) {
        console.error(error);
        return { message: 'Erro ao cadastrar.' };
    }
}