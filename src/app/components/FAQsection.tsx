'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    // Estado para controlar quais perguntas estão abertas
    const [openIndex, setOpenIndex] = useState(null);

    // Função para alternar o estado da pergunta
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Dados das perguntas e respostas
    const faqItems = [
        {
            question: "O e-book cobre todos os passos do casamento civil?",
            answer: "Sim, o e-book é um guia completo que aborda todos os passos necessários para realizar um casamento civil, desde a documentação até a cerimônia. Ele também inclui dicas práticas para evitar erros comuns."
        },
        {
            question: "Preciso contratar um advogado após ler o e-book?",
            answer: "Não necessariamente. O e-book foi desenvolvido para ser autoexplicativo e prático, permitindo que você realize o casamento civil sem a necessidade de um advogado. No entanto, se preferir assistência profissional, o e-book também orienta como encontrar um bom advogado."
        },
        {
            question: "O e-book é atualizado com as leis atuais?",
            answer: "Sim, o e-book é revisado periodicamente para garantir que esteja alinhado com as leis e regulamentações mais recentes. Você terá acesso a informações atualizadas e confiáveis."
        },
        {
            question: "Há algum bônus incluído na compra do e-book?",
            answer: "Sim! Ao adquirir o e-book, você recebe bônus exclusivos, como modelos de documentos, checklists e dicas extras para economizar tempo e dinheiro."
        },
        {
            question: "Posso acessar o e-book imediatamente após a compra?",
            answer: "Sim, o e-book é entregue em formato digital (PDF) e você terá acesso imediato após a confirmação do pagamento."
        },
        {
            question: "Há garantia de satisfação?",
            answer: "Sim, oferecemos uma garantia de 7 dias. Se você não ficar satisfeito com o conteúdo, basta nos informar dentro desse prazo para receber o reembolso integral."
        }
    ];

    return (
        <section className="py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 via-transparent to-[#ff5757]/5" />
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                    Perguntas Frequentes
                </h2>
                <div className="max-w-2xl mx-auto">
                    {faqItems.map((item, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors"
                            >
                                <span className="font-semibold text-[#8c52ff] text-left">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#dc568b] transition-transform ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white/50 backdrop-blur-sm rounded-b-lg">
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;