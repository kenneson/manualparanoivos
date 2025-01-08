'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';
import FAQSection from '../components/FAQsection';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';

const LandingPage = () => {
    const PreviewSection = () => {
        // Array com os caminhos das diferentes imagens
        const previewImages = [
            { src: '/1.png', alt: 'Primeira página do e-book' },
            { src: '/2.png', alt: 'Segunda página do e-book' },
            { src: '/3.png', alt: 'Terceira página do e-book' }
        ];

        return (
            <div className="min-h-screen bg-white">
                {/* Hero Section with E-book Preview */}
                <section className="py-20 bg-gradient-to-br from-[#8c52ff]/20 via-[#dc568b]/10 to-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left relative z-10">
                                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-[#ff5757]/20 to-[#8c52ff]/20 rounded-full blur-3xl -z-10" />
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                                    Guia Completo do Casamento Civil
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                                    Tudo o que você precisa saber para realizar seu casamento civil de forma simples e sem complicações
                                </p>
                                <button onClick={() => {
                                    const comprarSection = document.getElementById('comprar-ebook');
                                    if (comprarSection) {
                                        comprarSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                    className="bg-gradient-to-r from-[#ff5757] to-[#dc568b] text-white text-lg px-8 py-4 rounded-lg hover:from-[#dc568b] hover:to-[#8c52ff] transition-all duration-300">
                                    Quero meu e-book agora!
                                </button>
                            </div>
                            <div className="flex justify-center relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#8c52ff]/30 to-[#ff5757]/30 rounded-full blur-3xl" />
                                <div className="relative w-[300px] h-[400px]">
                                    <Image
                                        src="/standing-book-mockup.png"
                                        alt="E-book Casamento Civil"
                                        fill
                                        className="rounded-md shadow-2xl transform rotate-3 transition-transform hover:rotate-0 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Preview do Conteúdo */}
                <section className="py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8c52ff]/5 via-[#ff5757]/5 to-transparent" />
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                            Dê uma espiada no conteúdo
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {previewImages.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-lg border-2 border-[#8c52ff] relative">
                                    <div className="relative w-full h-[300px]">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="hover:scale-105 transition-transform duration-300 object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefícios */}
                <section className="py-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8c52ff]/10 via-[#dc568b]/10 to-[#ff5757]/10" />
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                            O que você vai encontrar neste e-book
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border border-[#dc568b]/20">
                                <CheckCircle className="w-12 h-12 text-[#ff5757] mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-[#8c52ff]">Guia Passo a Passo Simplificado</h3>
                                <p className="text-gray-600">
                                    Aprenda cada etapa do casamento civil de forma clara e prática, sem complicações.
                                </p>
                            </div>
                            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border border-[#dc568b]/20">
                                <CheckCircle className="w-12 h-12 text-[#ff5757] mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-[#8c52ff]">Economia de Tempo e Dinheiro</h3>
                                <p className="text-gray-600">
                                    Evite erros comuns e reduza custos com dicas práticas e orientações especializadas.
                                </p>
                            </div>
                            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border border-[#dc568b]/20">
                                <CheckCircle className="w-12 h-12 text-[#ff5757] mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-[#8c52ff]">Segurança e Confiança no Processo</h3>
                                <p className="text-gray-600">
                                    Siga um roteiro confiável, com checklists e modelos de documentos para garantir tudo certo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Depoimentos */}
                <section className="py-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 via-white to-[#dc568b]/5" />
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                            O que dizem nossos leitores
                        </h2>
                        <div className="flex flex-col items-center">
                            {/* Container das caixas */}
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {/* Depoimento 1 */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-[#8c52ff]/20">
                                    <div className="relative w-full h-[200px] flex justify-center items-center">
                                        <Image
                                            src="/depoimento1.jpg" // Substitua pelo caminho da imagem do depoimento
                                            alt="Print depoimento 1"
                                            width={400} // Ajuste o tamanho conforme necessário
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-4 justify-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-5 h-5 text-[#ff5757] fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic mb-4 text-center">
                                            &quot;O e-book foi um guia incrível! Segui todos os passos e meu casamento civil foi super tranquilo, sem surpresas ou problemas. Recomendo demais!&quot;
                                        </p>
                                        <div className="flex items-center justify-center pb-4">
                                            <div className="relative w-[40px] h-[40px]">
                                                <Image
                                                    src="/cliente1.jpg" // Substitua pela foto do cliente
                                                    alt="Cliente 1"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover border-2 border-[#dc568b]"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="font-semibold text-[#8c52ff]">Ana e João</p>
                                                <p className="text-sm text-gray-500">Dezembro 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Depoimento 2 */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-[#8c52ff]/20">
                                    <div className="relative w-full h-[200px] flex justify-center items-center">
                                        <Image
                                            src="/depoimento2.jpg" // Substitua pelo caminho da imagem do depoimento
                                            alt="Print depoimento 2"
                                            width={400} // Ajuste o tamanho conforme necessário
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-4 justify-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-5 h-5 text-[#ff5757] fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic mb-4 text-center">
                                            &quot;Não sabíamos por onde começar, mas o e-book nos deu toda a orientação que precisávamos. Foi como ter um consultor especializado ao nosso lado!&quot;
                                        </p>
                                        <div className="flex items-center justify-center pb-4">
                                            <div className="relative w-[40px] h-[40px]">
                                                <Image
                                                    src="/cliente2.jpg" // Substitua pela foto do cliente
                                                    alt="Cliente 2"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover border-2 border-[#dc568b]"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="font-semibold text-[#8c52ff]">Janaína e Pedro</p>
                                                <p className="text-sm text-gray-500">Janeiro 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Depoimento 3 (centralizado abaixo das duas primeiras caixas) */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-[#8c52ff]/20 mt-8 max-w-2xl">
                                <div className="relative w-full h-[200px] flex justify-center items-center">
                                    <Image
                                        src="/depoimento3.jpg" // Substitua pelo caminho da imagem do depoimento
                                        alt="Print depoimento 3"
                                        width={400} // Ajuste o tamanho conforme necessário
                                        height={200}
                                        className="object-contain" // Alterado para object-contain
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4 justify-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-5 h-5 text-[#ff5757] fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-4 text-center">
                                        &quot;Economizamos tempo e dinheiro com as dicas do e-book. Tudo foi tão simples que até nos surpreendemos! Valeu cada centavo.&quot;
                                    </p>
                                    <div className="flex items-center justify-center pb-4">
                                        <div className="relative w-[40px] h-[40px]">
                                            <Image
                                                src="/cliente3.jpg" // Substitua pela foto do cliente
                                                alt="Cliente 3"
                                                width={40}
                                                height={40}
                                                className="rounded-full object-cover border-2 border-[#dc568b]"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="font-semibold text-[#8c52ff]">Marcelo e Luana</p>
                                            <p className="text-sm text-gray-500">Janeiro 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <LeadForm />

                {/* Preço e CTA */}
                <section id="comprar-ebook" className="py-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8c52ff]/10 via-[#dc568b]/5 to-transparent" />
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#8c52ff] to-[#dc568b] inline-block text-transparent bg-clip-text">
                                Invista no seu futuro
                            </h2>
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#8c52ff]/20">
                                <p className="text-4xl font-bold bg-gradient-to-r from-[#ff5757] to-[#dc568b] inline-block text-transparent bg-clip-text mb-4">
                                    R$ 14,99
                                </p>
                                <ul className="text-left mb-8">
                                    <li className="flex items-center mb-3">
                                        <CheckCircle className="w-5 h-5 text-[#dc568b] mr-2" />
                                        <span className='font-bold text-black'>Acesso imediato ao e-book</span>
                                    </li>
                                    <li className="flex items-center mb-3">
                                        <CheckCircle className="w-5 h-5 text-[#dc568b] mr-2" />
                                        <span className='font-bold text-black'>Bônus exclusivos</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-[#dc568b] mr-2" />
                                        <span className='font-bold text-black'>Garantia de 7 dias</span>
                                    </li>
                                </ul>
                                <a href="https://pay.kiwify.com.br/hFeQAGN" target='_blank'><button className="w-full bg-gradient-to-r from-[#ff5757] to-[#dc568b] text-white text-lg px-8 py-4 rounded-lg hover:from-[#dc568b] hover:to-[#8c52ff] transition-all duration-300">
                                    Comprar agora
                                </button>
                                    </a>
                                    </div>
                            </div>
                        </div>
                </section>

                {/* FAQ */}
                <section className="py-16 relative">
                    <FAQSection />
                </section>
                <Footer />
            </div>
        );
    };

    return <PreviewSection />;
};

export default LandingPage;