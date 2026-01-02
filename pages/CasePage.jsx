import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MoveLeft, Newspaper, Share2, Target, Scale, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_CASES } from '../src/static/database';

const CasePage = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const activeCase = ALL_CASES.find(c => c.slug === slug);

    if (!activeCase) return <div className="h-screen bg-black flex items-center justify-center font-bold text-white tracking-widest">RECORD_NOT_FOUND</div>;

    const sendDemandEmail = () => {
        const subject = `Justice for ${activeCase.name.toUpperCase()}`;
        const body = `To the Concerned Authorities,\n\nI am writing regarding the case of ${activeCase.name}.\n\nSUMMARY:\n"${activeCase.summary}"\n\nLEGAL REFERENCE:\nSections: ${activeCase.bns_section}.\n\nAs a concerned citizen, I am following the progress of this case through the Public Justice Archive. We request transparency and a timely update on the legal proceedings.\n\nJustice delayed is justice denied.`;
        window.location.href = `mailto:${activeCase.authorityEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleShare = async () => {
        const shareData = {
            title: `Justice for ${activeCase.name}`,
            text: `I just read about the "${activeCase.name}" case on the India Unchained. We need to Speak Up.`,
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
            }
        } catch (err) { console.log("Error sharing:", err); }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#080808] min-h-screen text-white selection:bg-orange-600 pb-20"
        >
            <div className="fixed top-0 left-0 w-full h-1.5 flex z-[100]">
                <div className="h-full w-1/3 bg-[#FF671F]" />
                <div className="h-full w-1/3 bg-white" />
                <div className="h-full w-1/3 bg-[#046A38]" />
            </div>

            <main className="max-w-7xl mx-auto px-6 pt-32 ">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-orange-500 font-black text-[11px] tracking-[0.4em] uppercase">
                                    {activeCase.tag}
                                </span>
                                <div className="h-[1px] flex-1 bg-zinc-800" />
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
                                {activeCase.name}
                            </h1>

                            <p className="text-xl md:text-2xl font-bold text-zinc-400 uppercase tracking-tight max-w-2xl leading-tight italic">
                                {activeCase.headline}
                            </p>
                        </header>

                        <div className="relative mb-14 overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={activeCase.img}
                                alt={activeCase.name}
                                className="w-full h-auto object-cover max-h-[550px]"
                            />
                        </div>

                        <section className="mb-16">
                            <div className="border-l-8 border-orange-600 pl-8 py-2">
                                <h3 className="text-xs font-black text-orange-600 tracking-[0.4em] mb-4">The Incident</h3>
                                <p className="text-2xl md:text-4xl italic text-zinc-100 tracking-tighter font-bold capitalize leading-tight">
                                    {activeCase.summary}
                                </p>
                            </div>
                        </section>

                        <div className="mb-20">
                            <a
                                href={activeCase.newsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between bg-white text-black px-10 py-8 group hover:bg-green-700 hover:text-white transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    <Newspaper size={32} />
                                    <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter">Read Full Story</span>
                                </div>
                                <Newspaper size={32} className="text-green-700 group-hover:text-white" />
                            </a>
                        </div>

                        <div className="pt-16 border-t border-zinc-900 grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-orange-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 italic">
                                    <Target size={18} /> Social Impact
                                </h4>
                                <p className="text-zinc-400 leading-relaxed italic text-xl font-medium">
                                    {activeCase.analysis}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-green-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 italic">
                                    <Scale size={14} /> Legal Status (BNS)
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {activeCase.bns_section.split(',').map((s, i) => (
                                        <span key={i} className="bg-zinc-900 px-4 py-2 border border-white/5 text-[18px] font-black text-zinc-200 uppercase italic tracking-tighter hover:text-orange-500 transition-colors">
                                            {s.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-10">

                            <div className="bg-white text-black p-10 shadow-[15px_15px_0px_0px_rgba(234,88,12,1)]">
                                <h3 className="text-5xl font-black italic uppercase leading-[0.75] mb-6 tracking-tighter">
                                    Speak <br /> Up
                                </h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase leading-snug mb-10">
                                    Each time you send a mail, you amplify the call for justice. Collective voices push for action.
                                </p>
                                <button
                                    onClick={sendDemandEmail}
                                    className="w-full bg-black text-white p-6 flex items-center justify-between group hover:bg-orange-600 transition-all active:scale-95"
                                >
                                    <span className="font-black italic uppercase text-xl">Send Mail</span>
                                    <Mail size={24} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-10 flex h-2 gap-1">
                                    <div className="bg-[#FF671F] flex-1" />
                                    <div className="bg-zinc-200 flex-1" />
                                    <div className="bg-[#046A38] flex-1" />
                                </div>
                            </div>

                            <button
                                onClick={handleShare}
                                className="w-full border-4 border-orange-600 p-8 flex items-center justify-between text-orange-600 hover:bg-orange-600 hover:text-white transition-all group"
                            >
                                <span className="font-black italic uppercase text-xl tracking-tighter">Share To Others</span>
                                <Share2 size={28} className="group-hover:rotate-12 transition-transform" />
                            </button>

                            <p className="text-xs text-zinc-600 uppercase font-black italic text-center px-4 leading-relaxed tracking-[0.2em] opacity-50">
                                JUSTICE IS A COLLECTIVE DUTY
                            </p>
                        </div>
                    </aside>
                </div>
            </main>
        </motion.div>
    );
}

export default CasePage;