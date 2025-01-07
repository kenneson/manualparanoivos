import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#8c52ff]/10 via-[#dc568b]/10 to-[#ff5757]/10 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Redes Sociais */}
                    <div className="flex space-x-6">
                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@manualparanoivos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8c52ff] hover:text-[#dc568b] transition-colors"
                        >
                            <Image
                                src="/tik-tok.png" // Caminho da imagem na pasta public
                                alt="TikTok"
                                width={24} // Largura da imagem
                                height={24} // Altura da imagem
                                className="w-6 h-6" // Tamanho do ícone
                            />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/manualparanoivos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8c52ff] hover:text-[#dc568b] transition-colors"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>

                        {/* E-mail */}
                        <a
                            href="mailto:agendadosim@gmail.com"
                            className="text-[#8c52ff] hover:text-[#dc568b] transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Texto do Footer */}
                    <p className="text-center text-gray-600 flex items-center">
                        Feito com <Heart className="w-4 h-4 mx-1 text-[#ff5757]" /><a href="https://www.instagram.com/manualparanoivos/"> por manualparanoivos</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;