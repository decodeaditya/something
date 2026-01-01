import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MoveLeft, Newspaper, Share2, Target, Scale, MapPin, ShieldCheck, CheckCircle2, Flame } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_CASES } from '../src/static/database';

const CasePage = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const activeCase = ALL_CASES.find(c => c.slug === slug);

    if (!activeCase) return <div className="h-screen bg-black flex items-center justify-center font-bold text-white tracking-widest">RECORD_NOT_FOUND</div>;

    const sendDemandEmail = () => {
        const subject = `INQUIRY: ${activeCase.name.toUpperCase()} [#${activeCase.id}]`;
        const body = `To the Concerned Authorities,\n\nI am writing regarding the case of ${activeCase.name}.\n\nSUMMARY:\n"${activeCase.summary}"\n\nLEGAL REFERENCE:\nSections: ${activeCase.bns_section}.\n\nAs a concerned citizen, I am following the progress of this case through the Public Justice Archive. We request transparency and a timely update on the legal proceedings.\n\nJustice delayed is justice denied.`;
        window.location.href = `mailto:${activeCase.authorityEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="bg-[#080808] min-h-screen text-white selection:bg-orange-600 pb-20"
        >
            {/* TRICOLOR ACCENT BAR */}
            <div className="fixed top-55 left-0 w-full h-1 flex z-[60]">
                <div className="h-full w-1/3 bg-[#FF671F]" /> 
                <div className="h-full w-1/3 bg-white/90" />      
                <div className="h-full w-1/3 bg-[#046A38]" /> 
            </div>

            {/* NAV BAR */}
            <nav className="bg-black/80 backdrop-blur-lg border-b border-white/5 py-5 px-6 sticky top-1 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button 
                        onClick={() => navigate('/archive')} 
                        className="group flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all"
                    >
                        <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                        Archive Index
                    </button>
                    <div className="flex items-center gap-2 text-green-500/80">
                        <ShieldCheck size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Verified Dossier</span>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 pt-10 lg:pt-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8">
                        
                        {/* CASE HEADER */}
                        <header className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-orange-500 font-bold text-[10px] tracking-[0.3em] uppercase">
                                    {activeCase.tag}
                                </span>
                                <div className="h-px flex-1 bg-zinc-900" />
                            </div>
                            
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-4">
                                {activeCase.name}
                            </h1>
                            
                            <p className="text-lg md:text-xl font-bold text-zinc-400 uppercase tracking-tight max-w-2xl leading-snug italic">
                                {activeCase.headline}
                            </p>
                        </header>

                        {/* 1. VISUAL EVIDENCE */}
                        <div className="relative mb-10 overflow-hidden rounded-sm border border-white/5">
                            <img 
                                src={activeCase.img} 
                                alt={activeCase.name} 
                                className="w-full transition-all duration-700 object-cover max-h-[450px]" 
                            />
                        </div>

                        {/* 2. THE SUMMARY (Balanced Size) */}
                        <section className="mb-12">
                            <div className="border-l-4 border-orange-600 pl-6">
                                <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-3">Incident Brief</h3>
                                <p className="text-2xl md:text-3xl font-bold italic leading-tight text-zinc-100 uppercase">
                                    {activeCase.summary}
                                </p>
                            </div>
                        </section>

                        {/* 3. VERIFY SOURCE (Full Story) */}
                        <div className="mb-16">
                            <a 
                                href={activeCase.newsLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-between bg-zinc-100 text-black px-8 py-6 group hover:bg-green-700 hover:text-white transition-all rounded-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Newspaper size={24} />
                                    <span className="text-lg font-black italic uppercase tracking-tight">Read Full Story</span>
                                </div>
                              
                            </a>
                        </div>

                        {/* ANALYSIS GRID */}
                        <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
                            <div className="space-y-4">
                                <h4 className="text-orange-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Target size={14} /> Social Impact
                                </h4>
                                <p className="text-zinc-400 leading-relaxed italic text-lg">
                                    {activeCase.analysis}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-green-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Scale size={14} /> Legal Status
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeCase.bns_section.split(',').map((s, i) => (
                                        <span key={i} className="bg-zinc-900 px-3 py-1.5 border border-white/5 text-[15px] font-bold text-zinc-300 uppercase italic">
                                            {s.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-6">
                            
                            {/* ACTION BOX */}
                            <div className="bg-white text-black p-8 shadow-[10px_10px_0px_0px_rgba(255,103,31,1)]">
                               

                                <h3 className="text-3xl font-black italic uppercase leading-none mb-6">
                                    Demand Accountability
                                </h3>
<p className="text-[14px] font-bold text-zinc-400 uppercase leading-relaxed mb-4">
                                Each Time you send an mail to the concerned authority, you amplify the call for justice. Collective voices can break the silence and push for action.
                            </p>
                                <button
                                    onClick={sendDemandEmail}
                                    className="w-full bg-black text-white p-5 flex items-center justify-between group hover:bg-orange-600 transition-all active:scale-95"
                                >
                                    <span className="font-black italic uppercase tracking-tight">Send Mail</span> 
                                    <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <div className="mt-6 flex h-1 gap-0.5">
                                    <div className="bg-orange-600 flex-1" />
                                    <div className="bg-zinc-200 flex-1" />
                                    <div className="bg-green-600 flex-1" />
                                </div>
                            </div>

                            {/* COLORED SHARE */}
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert("LINK COPIED");
                                }}
                                className="w-full border-2 border-orange-600/30 p-5 flex items-center justify-between text-orange-500 hover:bg-orange-600 hover:text-white transition-all font-black italic uppercase text-[11px] tracking-widest group"
                            >
                                Share with Others <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
                            </button>

                            <p className="text-[9px] text-zinc-600 uppercase font-bold italic text-center px-4 leading-relaxed tracking-wider">
                                Speak up. Spread the word. Justice is a collective duty.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </motion.div>
    );
}

export default CasePage;