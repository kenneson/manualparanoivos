'use client'; // Indica que este é um componente do cliente

import { useState } from 'react';
import { createLead } from '../actions/leadActions';

const LeadForm = () => {
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (formData: FormData) => {
        const result = await createLead(formData);

        if (result.message === 'Lead cadastrado com sucesso!') {
            setMessage(result.message);
        } else {
            setMessage(result.message);
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-[#8c52ff]/10 via-[#dc568b]/10 to-[#ff5757]/10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                    Cadastre-se e Receba Novidades!
                </h2>
                <form action={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            className="w-full px-4 py-3 rounded-lg border border-[#8c52ff]/20 focus:outline-none focus:ring-2 focus:ring-[#dc568b]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            className="w-full px-4 py-3 rounded-lg border border-[#8c52ff]/20 focus:outline-none focus:ring-2 focus:ring-[#dc568b]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#ff5757] to-[#dc568b] text-white text-lg px-8 py-4 rounded-lg hover:from-[#dc568b] hover:to-[#8c52ff] transition-all duration-300"
                    >
                        Quero Receber Novidades!
                    </button>
                    {message && (
                        <p className="mt-4 text-center text-gray-600">{message}</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default LeadForm;