'use server';

import { prisma, Lead } from '@/lib/prisma'; // Importa o Prisma Client e o tipo Lead
import { sendEmail } from '@/app/actions/sendEmail'; // Importa a função de envio de email

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

        // Envia o email de boas-vindas
        const emailResult = await sendEmail(email, name);

        if (!emailResult.success) {
            console.error('Erro ao enviar email:', emailResult.error);
            return { message: 'Cadastrado com sucesso, mas o email não pôde ser enviado.', lead };
        }

        return { message: 'Cadastrado com sucesso!', lead };
    } catch (error) {
        console.error(error);
        return { message: 'Erro ao cadastrar.' };
    }
}