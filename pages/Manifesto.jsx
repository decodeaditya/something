import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MoveLeft, Zap, ScrollText } from 'lucide-react'

export const Manifesto = () => {
  const navigate = useNavigate()

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#050505] text-white selection:bg-orange-600 relative overflow-hidden mt-20"
      >

        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0">
          <div className="absolute top-[10%] -left-[10%] text-[30vw] font-black italic leading-none rotate-12 whitespace-nowrap">
            BHARAT
          </div>
          <div className="absolute bottom-[10%] -right-[10%] text-[30vw] font-black italic leading-none -rotate-12 uppercase whitespace-nowrap">
            SATYAMEV
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32 relative z-10">
          
          <motion.div {...fadeInUp} className="mb-24 md:mb-40">
            <div className="flex items-center gap-4 mb-6 opacity-50">
              <div className="h-px w-8 md:w-12 bg-orange-600" />
              <span className="text-[9px] md:text-xs font-black tracking-[0.5em] uppercase">Why It Exists</span>
            </div>
            <h1 className="text-[16vw] md:text-[13vw] leading-[0.85] font-black italic tracking-tighter uppercase break-words">
              MANIFESTO<span className="text-orange-600">.</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-56">
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-[0.95] tracking-tighter mb-10">
                We refuse to be mere <br />
                <span className="text-green-500">bystanders</span> in our own <br className="hidden md:block" />
                nation's story.
              </h2>
              <p className="text-lg md:text-2xl text-zinc-400 italic leading-relaxed max-w-2xl border-l-2 border-orange-600 pl-6 md:pl-8">
                Every victim is our own — our brothers, sisters, daughters, and sons. The soil of Bharat remembers every injustice done to her children.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="p-8 md:p-12 bg-zinc-900/20 border border-white/5 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                    <ScrollText size={60} />
                </div>
                <p className="text-xl md:text-2xl italic leading-tight text-zinc-200 relative z-10">
                  "Inspired by <span className="text-white font-bold">Bose</span>, <span className="text-white font-bold">Bhagat</span>, and <span className="text-white font-bold">Khudiram</span>, we keep this digital record not to grieve, but to fuel resistance."
                </p>
              </div>
            </motion.div>
          </div>

          <motion.section 
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="mb-32 md:mb-56 border-t border-white/5 pt-16 md:pt-24"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
              <h3 className="text-5xl md:text-[7vw] font-black italic uppercase leading-none tracking-tighter">
                ONE INTERVAL.<br />
                ONE <span className="text-orange-600 underline decoration-[6px] md:decoration-8 underline-offset-[8px] md:underline-offset-[12px]">CAUSE.</span>
              </h3>
              <p className="text-zinc-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] max-w-xs md:text-right italic">
                // Focused_Accountability //
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {[
                    { label: "ROTATION", title: "Focused Strike", text: "Every interval features one specific cause at the top of the War Room to focus national attention." },
                    { label: "AMPLIFY", title: "Active Duty", text: "Check back daily. Your role is to carry the truth of the active dossier into your communities." },
                    { label: "VAULT", title: "Permanent Archive", text: "The archive never forgets. Every record remains live until accountability is served." }
                ].map((item, idx) => (
                    <div key={idx} className="group overflow-hidden">
                        <span className="text-orange-600 font-black text-[10px] tracking-[0.3em] block mb-3 italic">[{item.label}]</span>
                        <h4 className="text-xl md:text-2xl font-black italic uppercase mb-3 tracking-tight">{item.title}</h4>
                        <p className="text-zinc-500 italic text-base md:text-lg leading-snug group-hover:text-zinc-300 transition-colors">{item.text}</p>
                    </div>
                ))}
            </div>
          </motion.section>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center text-center space-y-12 md:space-y-20 pb-12"
          >
            <div className="space-y-4">
              <Zap className="text-orange-600 mx-auto animate-pulse" size={40} />
              <h4 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter">
                Silence is Disloyalty.
              </h4>
            </div>

            <button 
              onClick={() => navigate('/')} 
              className="group bg-white text-black px-10 md:px-20 py-6 md:py-10 text-lg md:text-2xl font-black italic flex items-center gap-4 md:gap-6 hover:bg-orange-600 hover:text-white transition-all transform active:scale-95"
            >
              <MoveLeft strokeWidth={3} className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-3 transition-transform" /> 
              RETURN TO THE FIGHT
            </button>

            <div className="flex gap-4 opacity-30 pt-8">
                <div className="h-[2px] w-12 md:w-20 bg-orange-600" />
                <div className="h-[2px] w-12 md:w-20 bg-white" />
                <div className="h-[2px] w-12 md:w-20 bg-green-600" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}