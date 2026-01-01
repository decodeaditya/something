import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    X, Menu,
    Fingerprint,
    Activity
} from 'lucide-react';

export const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = React.useState(false)
    const route = { page: window.location.pathname === '/' ? 'home' : window.location.pathname.slice(1) }

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex justify-between items-center">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('')}>
                    <Fingerprint className="text-orange-600" size={28} />
                    <span className="text-2xl text-white font-black tracking-tight italic">INDIA<span className='text-green-500 font-black tracking-tight'>UNCHAINED</span></span>
                </div>

                <div className="hidden lg:flex gap-10 text-[18px] font-bold">
                    <button onClick={() => navigate('')} className={route.page === 'home' ? 'text-orange-500' : 'text-zinc-500 hover:text-white'}>War Room</button>
                    <button onClick={() => navigate('about')} className={route.page === 'about' ? 'text-white-500' : 'text-zinc-500 hover:text-white'}>Manifesto</button>
                    <button onClick={() => navigate('archive')} className={route.page === 'archive' ? 'text-green-500' : 'text-zinc-500 hover:text-white'}>Matters Archive</button>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-orange-600">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-black z-[105] flex flex-col justify-center p-12 gap-6">
                        <button onClick={() => { navigate(''); setMenuOpen(false) }} className="text-4xl font-black italic text-left text-white">WAR_ROOM</button>
                        <button onClick={() => { navigate('about'); setMenuOpen(false) }} className="text-4xl font-black italic text-left text-white">MANIFESTO</button>
                        <button onClick={() => { navigate('archive'); setMenuOpen(false) }} className="text-4xl font-black italic text-left text-white">ARCHIVE</button>
                        <button onClick={() => setMenuOpen(false)} className="mt-10 text-orange-600 flex items-center gap-2 tracking-widest"><X /> CLOSE</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
