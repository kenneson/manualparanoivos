'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function sendEmail(to: string, name: string) {
    const subject = 'Bem-vindo ao nosso serviço! 🎉';
    const text = `Olá ${name},\n\nObrigado por se cadastrar no nosso serviço. Estamos muito felizes em tê-lo conosco!\n\nAtenciosamente,\nEquipe Manual Para Noivos`;
    const html = `
        <h1>Olá, ${name}</h1>
        <p>Obrigado por se cadastrar no nosso serviço. Estamos muito felizes em tê-lo conosco!</p>
        <h3>Não se esqueça de nos seguir em nossas redes sociais: @manualparanoivos no Instagram e TikTok</h3>
        <p>Atenciosamente,<br>Equipe Manual Para Noivos !</p>
    `;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email enviado para: ${to}`);
        return { success: true };
    } catch (error) {
        console.error(`Erro ao enviar email para ${to}:`, error);
        return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
    }
}