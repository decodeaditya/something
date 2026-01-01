import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MoveRight, Target, Skull, ShieldAlert, Clock, ChevronRight, HelpCircle, Zap, Database } from 'lucide-react';
import { ALL_CASES } from "../src/static/database.jsx";
import { useNavigate } from 'react-router-dom';
import CaseCard from '../components/CaseCard.jsx';
import Martyrs from '../components/Martyrs.jsx';

export default function DigitalWarRoom() {
    const navigate = useNavigate();
    
    const featuredCase = ALL_CASES.find(c => c.featured);
    const gridCases = ALL_CASES.slice(0, 6); 

    const fadeInUp = {
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="bg-[#050505] text-white selection:bg-orange-600 overflow-x-hidden relative">
            
            {/* 1. HERO SECTION */}
            <AnimatePresence mode="wait">
                <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {featuredCase && (
                        <section className="relative h-dvh w-full overflow-hidden flex items-end">
                            <motion.img 
                                initial={{ scale: 1.1, filter: 'grayscale(100%) brightness(0.2)' }}
                                animate={{ scale: 1, filter: 'grayscale(100%) brightness(0.35)' }}
                                transition={{ duration: 1.5 }}
                                src={featuredCase.img} 
                                className="absolute inset-0 w-full h-full object-cover contrast-125" 
                                alt={featuredCase.name} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

                            <div className="relative z-10 p-6 md:p-20 w-full max-w-7xl mx-auto mb-10">
                                <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <span className="bg-orange-600 text-black px-4 py-1 text-[10px] font-black tracking-[0.3em] mb-6 inline-block uppercase italic">
                                        {featuredCase.headline}
                                    </span>
                                    <h1 className="text-[18vw] md:text-[12vw] leading-[0.75] font-black italic tracking-tighter mb-10 uppercase">
                                        {featuredCase.name}<span className="text-orange-600">.</span>
                                    </h1>
                                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        <p className="max-w-xl text-lg md:text-xl font-medium text-zinc-300 italic border-l-4 border-orange-600 pl-6">
                                            "{featuredCase.summary}"
                                        </p>
                                        <button
                                            onClick={() => navigate(`/case/${featuredCase.slug}`)}
                                            className="bg-white text-black px-12 py-6 text-xl font-black italic flex items-center gap-4 hover:bg-orange-600 hover:text-white transition-all transform active:scale-95 whitespace-nowrap group"
                                        >
                                            OPEN DOSSIER <MoveRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    )}

                    {/* 2. SYSTEM NOTICE STRIP (ORANGE) */}
                    <section className="bg-orange-600 text-black py-6 px-6 relative z-20 shadow-2xl">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <Clock className="animate-pulse" size={24} strokeWidth={3} />
                                <div className="text-left">
                                    <p className="font-black italic uppercase text-lg leading-tight">Something Important</p>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">New featured cause every day/week. Stay vigilant and Participate.</p>
                                </div>
                            </div>
                            <div className="hidden md:block h-8 w-[1px] bg-black/20" />
                            <p className="text-[10px] font-black  uppercase border-2 border-black px-4 py-2">
                                {featuredCase ? `Current Featured Case: ${featuredCase.name}` : 'No Featured Case At The Moment'}
                            </p>
                        </div>
                    </section>

                    {/* 3. THE MANIFESTO STRIP (RESTORED & IMPROVED) */}
                    <section className="bg-zinc-950 border-b border-white/5 py-8 px-6 relative z-20 backdrop-blur-md">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4 group">
                                <Activity size={20} className="text-green-500 animate-pulse hidden md:block"/>
                                <p className="text-sm md:text-base italic text-zinc-400 max-w-lg leading-snug">
                                    A decentralized archive of justice denied — dedicated to the families left behind by systemic failure.
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4">
                               
                                <button 
                                    onClick={() => navigate('/about')} 
                                    className="relative group overflow-hidden border border-orange-600/30 px-6 py-3 rounded-none"
                                >
                                    <span className="relative z-10 text-orange-500 font-black italic text-xs md:text-sm uppercase group-hover:text-black transition-colors">
                                        Confused? Read Manifesto
                                    </span>
                                    <div className="absolute inset-0 bg-orange-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 4. MARTYRS TICKER */}
                    <Martyrs />

                    {/* 5. THE DOSSIER GRID */}
                    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
                        <motion.div {...fadeInUp} className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-900 pb-12">
                            <div>
                                <h2 className="text-7xl md:text-[9vw] font-black uppercase italic tracking-tighter leading-none">
                                    The <span className="text-zinc-800" style={{ WebkitTextStroke: '1px #3f3f46' }}>Dossier</span>
                                </h2>
                                <p className="text-zinc-600 text-xs md:text-sm uppercase mt-4 font-mono tracking-widest flex items-center gap-2">
                                    <Database size={14} /> Archive_Type: Systemic_Failure // Ref: 06_Records
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-3 text-zinc-800 font-black italic">
                                <Target size={32} className="text-orange-600 animate-pulse" />
                                <span className="text-2xl uppercase tracking-tighter">Priority_Intel</span>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                            {gridCases.map((item, idx) => (
                                <motion.div key={item.id} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                                    <CaseCard {...item} />
                                </motion.div>
                            ))}
                        </div>

                        {/* ARCHIVE GATEWAY */}
                        <motion.div 
                            {...fadeInUp}
                            onClick={() => navigate('/archive')}
                            className="mt-32 border-2 border-dashed border-zinc-800 p-12 md:p-24 text-center group hover:border-orange-600 transition-all cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <ShieldAlert className="mx-auto mb-8 text-zinc-800 group-hover:text-orange-600 group-hover:rotate-12 transition-all" size={60} />
                            <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter">Enter Full Archive</h3>
                            <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-lg italic leading-relaxed">
                                Our records go beyond this front page. Access the vault of decentralized evidence across the nation.
                            </p>
                            <div className="inline-flex items-center gap-4 text-orange-600 font-black italic text-2xl group-hover:gap-8 transition-all">
                                BROWSE ALL {ALL_CASES.length} CASES <ChevronRight size={32} />
                            </div>
                        </motion.div>
                    </section>

                    {/* 6. FOOTER */}
                    <section className="py-48 text-center px-6 border-t border-zinc-900/50 relative overflow-hidden">
                        <Skull className="mx-auto text-zinc-900/40 mb-10" size={100} />
                        <h4 className="text-6xl md:text-[10vw] font-black italic uppercase mb-12 leading-[0.75] tracking-tighter">
                            The soil <br /> <span className="text-orange-600">remembers.</span>
                        </h4>
                        <div className="flex justify-center gap-3">
                             <div className="h-1 w-20 bg-orange-600"></div>
                             <div className="h-1 w-20 bg-white"></div>
                             <div className="h-1 w-20 bg-green-600"></div>
                        </div>
                        <p className="mt-12 text-[10px] font-mono text-zinc-700 tracking-[1em] uppercase">Bharat // Decentralized</p>
                    </section>

                </motion.div>
            </AnimatePresence>
        </div>
    );
}