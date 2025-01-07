'use client';

import { useState, useEffect } from 'react';
import { createLead } from '../actions/leadActions';

const LeadForm = () => {
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); // Adicionado estado de loading

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true); // Ativa o estado de loading
        setMessage(''); // Limpa a mensagem anterior

        const result = await createLead(formData);

        if (result.lead) {
            setMessage('Cadastrado com sucesso! Verifique seu email.'); // Mensagem de sucesso
        } else {
            setMessage('Erro ao cadastrar. Tente novamente.'); // Mensagem de erro
        }

        setIsLoading(false); // Desativa o estado de loading
    };

    // Use o useEffect para limpar a mensagem após 5 segundos
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000); // 5000 milissegundos = 5 segundos

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <section className="py-16 bg-gradient-to-br from-[#8c52ff]/10 via-[#dc568b]/10 to-[#ff5757]/10">
            <div className="container mx-auto px-4">
                <h2 className="flex justify-center text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] text-transparent bg-clip-text">
                    Cadastre-se e Receba Novidades!
                </h2>
                <form action={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            className="w-full px-4 py-3 rounded-lg border border-[#8c52ff]/20 focus:outline-none focus:ring-2 focus:ring-[#dc568b] text-gray-900 placeholder-gray-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu melhor e-mail"
                            className="w-full px-4 py-3 rounded-lg border border-[#8c52ff]/20 focus:outline-none focus:ring-2 focus:ring-[#dc568b] text-gray-900 placeholder-gray-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading} // Desabilita o botão durante o loading
                        className="w-full bg-gradient-to-r from-[#ff5757] to-[#dc568b] text-white text-lg px-8 py-4 rounded-lg hover:from-[#dc568b] hover:to-[#8c52ff] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Cadastrando...' : 'Quero Receber Novidades!'}
                    </button>
                    {message && (
                        <p
                            className={`mt-4 text-center text-white rounded-md p-2 ${
                                message.includes('sucesso') ? 'bg-green-500' : 'bg-red-500'
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default LeadForm;