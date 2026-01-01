import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Mail, MoveLeft, Newspaper, Share2, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_CASES } from '../src/static/database';


const CasePage = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const activeCase = ALL_CASES.find(c => c.slug === slug);

    return (
        <motion.div key="detail" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-orange-600 mb-12 text-sm italic hover:gap-4 transition-all tracking-widest">
                <MoveLeft /> WAR ROOM
            </button>

            <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h1 className="text-[10vw] italic leading-[0.8] tracking-tighter mb-6">{activeCase.name}</h1>
                        <p className="text-xl normal-case italic text-zinc-400 max-w-3xl">{activeCase.summary}</p>
                    </div>

                    <img src={activeCase.img} alt={activeCase.name} className="w-full border-2 border-white/10 shadow-2xl" />

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900/80 p-10 border-l-4 border-orange-600">
                            <h4 className="text-sm tracking-widest text-orange-600 mb-6 flex items-center gap-2"><Activity size={18} /> WHY THIS HURTS ALL OF US</h4>
                            <p className="text-xl normal-case text-zinc-200 font-medium leading-relaxed italic">{activeCase.analysis}</p>
                        </div>
                        <div className="bg-zinc-900/80 p-10 border-l-4 border-white">
                            <h4 className="text-sm tracking-widest text-white mb-6 flex items-center gap-2"><ShieldCheck size={18} /> LEGAL VIOLATIONS</h4>
                            <p className="text-xl text-zinc-400 font-mono italic">{activeCase.bns_section}</p>
                        </div>
                    </div>

                    {/* VERIFICATION BUTTONS */}
                    <div className="flex flex-wrap gap-6">
                        <a href={activeCase.newsLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-zinc-800 px-8 py-5 text-sm hover:bg-white hover:text-black transition-all">
                            <Newspaper size={20} /> GET FULL STORY
                        </a>
                        <button onClick={() => {
                            navigator.share ? navigator.share({ title: activeCase.name, url: window.location.href }) : navigator.clipboard.writeText(window.location.href);
                        }} className="flex items-center gap-3 bg-zinc-800 px-8 py-5 text-sm hover:bg-orange-600 transition-all">
                            <Share2 size={20} /> SHARE THE FIGHT
                        </button>
                    </div>
                </div>

                {/* ACTION WIDGET */}
                <div className="h-fit">
                    <div className="bg-white text-black p-12 sticky top-32 shadow-[20px_20px_0px_0px_rgba(234,88,12,1)]">
                        <Zap className="mb-8 text-orange-600" size={48} fill="currentColor" />
                        <h3 className="text-5xl italic mb-8 leading-none">STAND FOR OUR FAMILY</h3>
                        <p className="text-sm normal-case font-bold mb-10 leading-relaxed opacity-70">
                            They were not alone. They are not forgotten. Raise your voice directly to the authorities — demand justice for our brother/sister.
                        </p>
                        <button
                            onClick={() => {
                                const body = `Respected Authority,\n\nWe, the people of Bharat, demand swift and transparent justice for ${activeCase.name}.\n\nThis is not just one case — it is an attack on every citizen.\n\nRelevant sections: ${activeCase.bns_section}\n\nWe are watching.`;
                                window.location.href = `mailto:${activeCase.authorityEmail}?subject=PEOPLE'S DEMAND: JUSTICE FOR ${activeCase.name}&body=${encodeURIComponent(body)}`;
                            }}
                            className="w-full bg-orange-600 text-white p-8 flex items-center justify-between hover:bg-black transition-all"
                        >
                            RAISE VOICE NOW <Mail size={32} />
                        </button>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CasePage