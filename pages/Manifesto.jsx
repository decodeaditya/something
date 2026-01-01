import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'


export const Manifesto = () => {
  return (
    <AnimatePresence mode="wait">
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 pb-20 px-8 max-w-5xl mx-auto text-center">
            <h1 className="text-[12vw] italic tracking-tighter text-orange-600 mb-16 leading-none">MANIFESTO.</h1>
            <p className="text-2xl normal-case italic text-zinc-300 leading-tight mb-16">
              We are not spectators.<br />
              Every victim is our family — brother, sister, daughter, son.<br />
              The soil of Bharat remembers every injustice.<br />
              Inspired by Bose, Bhagat, and Khudiram, we archive failure to fuel action.
            </p>
            <p className="text-xl normal-case italic text-zinc-500 mb-20">
              Silence is betrayal. Action is loyalty to the Republic.
            </p>
            <button className="bg-white text-black px-16 py-8 italic hover:bg-orange-600 transition-all">
              RETURN TO THE FIGHT
            </button>
        </motion.div>
    </AnimatePresence>
  )
}
