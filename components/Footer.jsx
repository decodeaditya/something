import { History, Scale, Sword, Twitter, Github, Globe, Terminal } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-10 border-t border-zinc-900 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    
                    {/* MISSION COLUMN */}
                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-2xl font-black italic tracking-tighter uppercase text-white">
                            INDIA THAT IS BHARAT
                        </p>
                        <p className="text-sm normal-case italic text-zinc-500 leading-relaxed">
                            A digital fortress dedicated to documenting systemic failure and demanding accountability. The land of martyrs deserves a legacy of justice.
                        </p>
                        <div className="flex justify-center md:justify-start gap-6">
                            <History className="text-orange-600 hover:scale-110 transition-transform cursor-pointer" size={24} />
                            <Scale className="text-white hover:scale-110 transition-transform cursor-pointer" size={24} />
                            <Sword className="text-green-600 hover:scale-110 transition-transform cursor-pointer" size={24} />
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-2">Navigation</p>
                        <button onClick={() => navigate('/')} className="text-zinc-400 hover:text-orange-500 text-sm font-bold italic uppercase transition-colors">War_Room</button>
                        <button onClick={() => navigate('/about')} className="text-zinc-400 hover:text-orange-500 text-sm font-bold italic uppercase transition-colors">Manifesto</button>
                        <button onClick={() => navigate('/archive')} className="text-zinc-400 hover:text-orange-500 text-sm font-bold italic uppercase transition-colors">Matters Archive</button>
                    </div>

                    {/* CONNECT & DEV MESSAGE */}
                    <div className="flex flex-col items-center md:items-end space-y-6">
                        <div className="text-center md:text-right">
                            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-4">Network_Status</p>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-zinc-900/50 border border-zinc-800 hover:border-orange-600 text-zinc-400 hover:text-white transition-all">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="p-3 bg-zinc-900/50 border border-zinc-800 hover:border-orange-600 text-zinc-400 hover:text-white transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="#" className="p-3 bg-zinc-900/50 border border-zinc-800 hover:border-orange-600 text-zinc-400 hover:text-white transition-all">
                                    <Globe size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-700 font-mono text-[10px] uppercase">
                            <Terminal size={12} />
                            <span>v1.0.4 Built for Bharat</span>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase text-center md:text-left">
                        © {currentYear} DIGITAL_WAR_ROOM. NO RIGHTS RESERVED. JUSTICE IS PUBLIC DOMAIN.
                    </p>
                    <div className="flex items-center gap-8">
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            Built with <span className="text-orange-600">Rage</span> & Code
                        </p>
                        <div className="flex gap-1">
                            <div className="h-1 w-4 bg-orange-600"></div>
                            <div className="h-1 w-4 bg-white"></div>
                            <div className="h-1 w-4 bg-green-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}