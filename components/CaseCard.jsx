import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MoveRight, ShieldAlert } from 'lucide-react';

const CaseCard = (item) => {
    const navigate = useNavigate()

    return (
        <motion.div
            key={item.id}
            onClick={() => navigate(`/case/${item.slug}/`)} 
            className="group cursor-pointer border border-white/5 bg-zinc-950 hover:border-orange-600/50 transition-all duration-700 rounded-none overflow-hidden relative shadow-2xl"
            whileHover={{ y: -10 }}
        >
            <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <div className="relative h-72 md:h-[450px] overflow-hidden">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover md:grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute top-6 left-6 z-30 flex items-center gap-2">
                    <div className="h-2 w-2 bg-orange-600 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-orange-500 font-black">
                        {item.tag || "Classified_Dossier"}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 p-6 md:p-10 z-30 w-full">
                    <h4 className="text-4xl md:text-5xl lg:text-7xl font-black italic leading-[0.8] tracking-tighter uppercase break-words">
                        {item.name}
                    </h4>
                </div>
            </div>

            <div className="p-8 md:p-10 bg-zinc-950 relative z-30">
                <p className="text-zinc-400 text-sm md:text-base normal-case italic leading-relaxed line-clamp-3 group-hover:text-zinc-200 transition-colors">
                    "{item.summary}"
                </p>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-600 group-hover:text-orange-600 transition-colors">
                        <ShieldAlert size={14} />
                        <span className="text-[9px] font-mono tracking-widest uppercase">JUSTICE DELAYED</span>
                    </div>

                    <span className="text-orange-600 flex italic items-center gap-3 text-xs md:text-sm font-black tracking-tighter group-hover:gap-6 transition-all uppercase">
                       Open Dossier <MoveRight size={20} />
                    </span>
                </div>
            </div>

            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-600/10 blur-[100px] rounded-full group-hover:bg-orange-600/20 transition-all duration-700" />
        </motion.div>
    )
}

export default CaseCard

