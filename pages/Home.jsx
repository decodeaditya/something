import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MoveRight,
    Target,
} from 'lucide-react';
import { ALL_CASES } from "../src/static/database.jsx";
import { useNavigate } from 'react-router-dom';
import CaseCard from '../components/CaseCard.jsx';
import Martyrs from '../components/Martyrs.jsx';

export default function DigitalWarRoom() {
    const navigate = useNavigate()
    const featuredCase = ALL_CASES.find(c => c.featured);

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    {/* FEATURED CASE HERO */}
                    {featuredCase && (
                        <section className="relative h-dvh w-full overflow-hidden flex items-end">
                            <img src={featuredCase.img} className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125" alt={featuredCase.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="relative z-10 p-8 md:p-20 w-full">
                                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <span className="bg-orange-600 text-black px-4 py-1 text-xs font-bold mb-6 inline-block">{featuredCase.headline}</span>
                                    <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] italic tracking-tighter mb-8">{featuredCase.name}</h1>
                                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        <p className="max-w-xl text-lg normal-case font-medium text-zinc-300 italic">{featuredCase.summary}</p>
                                        <button
                                            onClick={() => navigate(`case/${featuredCase.slug}`)}
                                            className="bg-white text-black px-10 py-6 text-xl flex items-center gap-4 hover:bg-orange-600 hover:text-white transition-all"
                                        >
                                            OPEN DOSSIER <MoveRight />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    )}
                    
                    {/* MARTYRS */}
                    <Martyrs />

                    {/* CASE GRID */}
                    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
                        <h3 className="text-3xl md:text-5xl italic text-center mb-20 flex flex-col md:flex-row items-center justify-center gap-6">
                            <Target className="text-orange-600" size={48} />
                            <span>WE WILL NOT FORGET OUR FAMILY</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                            {ALL_CASES.map(item => (
                                <CaseCard key={item.id} {...item} />
                            ))}
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}