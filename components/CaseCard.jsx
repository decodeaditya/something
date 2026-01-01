import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react';

const CaseCard = (item) => {
    const navigate = useNavigate()
    return (
        <motion.div
            key={item.id}
            onClick={() => navigate(`case/${item.slug}`)}
            className="group cursor-pointer border-2 border-white/10 bg-zinc-900/40 hover:border-orange-600/70 transition-all duration-500 rounded-none overflow-hidden shadow-2xl"
            whileHover={{ y: -8 }}
        >
            <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                    <span className="text-orange-600 text-xs md:text-sm tracking-widest block mb-4 opacity-90">{item.tag}</span>
                    <h4 className="text-4xl md:text-5xl lg:text-6xl italic leading-tight">{item.name}</h4>
                </div>
            </div>
            <div className="p-8 md:p-12 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950">
                <p className="text-base md:text-lg normal-case text-zinc-200 leading-relaxed opacity-90">
                    {item.summary}
                </p>
                <div className="mt-10 flex justify-end">
                    <span className="text-orange-600 flex items-center gap-4 text-sm md:text-base tracking-widest group-hover:gap-8 transition-all">
                        OPEN DOSSIER <MoveRight size={24} />
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default CaseCard