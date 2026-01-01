import { History, Scale, Sword } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="p-20 border-t border-zinc-900 bg-black flex flex-col items-center">
            <p className="text-[24px] text-zinc-700 uppercase">INDIA THAT IS BHARAT</p>
            <p className="text-lg normal-case italic text-zinc-500 mt-8">We remember. We act. For our India.</p>
            <div className="mt-12 flex gap-12">
                <History className="text-orange-600 cursor-pointer" size={32} />
                <Scale className="text-zinc-600 cursor-pointer" size={32} />
                <Sword className="text-green-600 cursor-pointer" size={32} />
            </div>
        </footer>
    )
}
