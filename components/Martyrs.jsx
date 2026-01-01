import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const Martyrs = () => {
    return (
        <section className="bg-zinc-950 py-20 md:py-40 overflow-hidden">
            {/* SECTION HEADER */}
            <div className="px-8 mb-32 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xs tracking-[1em] text-orange-600 font-black">THE_FOUNDATION</h2>
                    <div className="h-[1px] flex-1 bg-orange-600/20"></div>
                </div>
                <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                    Lest We <span className="text-zinc-800 underline decoration-orange-600">Forget.</span>
                </h3>
            </div>

            {/* BOSE - THE ARCHITECT (ORANGE) */}
            <div className="relative border-y border-white/5 group">
                {/* Background "Ghost" Text */}
                <div className="absolute top-0 left-0 text-[25vw] font-black italic text-white/[0.02] leading-none pointer-events-none select-none">
                    FREEDOM
                </div>
                
                <div className="grid lg:grid-cols-2">
                    <div className="p-12 md:p-32 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                        <div className="mb-8 text-orange-600 opacity-50"><Quote size={40} fill="currentColor" /></div>
                        <h3 className="text-7xl md:text-[10vw] font-black italic leading-[0.8] mb-8 group-hover:text-orange-600 transition-all duration-700 uppercase tracking-tighter">
                            BOSE.
                        </h3>
                        <p className="text-xl md:text-2xl normal-case italic text-zinc-300 border-l-8 border-orange-600 pl-8 leading-tight max-w-xl">
                            "GIVE ME BLOOD, AND I SHALL GIVE YOU FREEDOM." <br />
                            <span className="text-sm md:text-base mt-6 block text-zinc-500 font-sans uppercase font-bold tracking-widest not-italic">
                                He didn't build the INA so we could stand silent when our brothers and sisters are denied justice.
                            </span>
                        </p>
                    </div>
                    <div className="h-[500px] lg:h-auto overflow-hidden order-1 lg:order-2">
                        <img 
                            src="https://res.cloudinary.com/dkplc2mbj/image/upload/v1679999620/Subhas_Chandra_Bose_Congress_Sandesh_f4119e6d3f.jpg"
                            className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                            alt="Netaji"
                        />
                    </div>
                </div>
            </div>

            {/* BHAGAT - THE IDEALOGUE (WHITE) */}
            <div className="relative border-b border-white/5 group">
                <div className="absolute top-0 right-0 text-[25vw] font-black italic text-white/[0.02] leading-none pointer-events-none select-none">
                    REVOLUTION
                </div>

                <div className="grid lg:grid-cols-2">
                    <div className="h-[500px] lg:h-auto overflow-hidden">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Bhagat_Singh_1929.jpg"
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                            alt="Bhagat Singh"
                        />
                    </div>
                    <div className="p-12 md:p-32 flex flex-col justify-center bg-zinc-900/20 backdrop-blur-sm relative z-10">
                        <div className="mb-8 text-zinc-500 opacity-50"><Quote size={40} fill="currentColor" /></div>
                        <h3 className="text-7xl md:text-[10vw] font-black italic leading-[0.8] mb-8 group-hover:text-white transition-all duration-700 uppercase tracking-tighter">
                            BHAGAT.
                        </h3>
                        <p className="text-xl md:text-2xl normal-case italic text-zinc-300 border-l-8 border-white pl-8 leading-tight max-w-xl">
                            "THEY MAY KILL ME, BUT THEY CANNOT KILL MY IDEAS." <br />
                            <span className="text-sm md:text-base mt-6 block text-zinc-500 font-sans uppercase font-bold tracking-widest not-italic">
                                At 23, he faced the gallows for us. Will we honor his sacrifice with action or apathy?
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* KHUDIRAM - THE SPIRIT (GREEN) */}
            <div className="relative border-b border-white/5 group">
                <div className="absolute bottom-0 left-0 text-[25vw] font-black italic text-white/[0.02] leading-none pointer-events-none select-none">
                    SACRIFICE
                </div>

                <div className="grid lg:grid-cols-2">
                    <div className="p-12 md:p-32 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                        <div className="mb-8 text-green-600 opacity-50"><Quote size={40} fill="currentColor" /></div>
                        <h3 className="text-7xl md:text-[10vw] font-black italic leading-[0.8] mb-8 group-hover:text-green-600 transition-all duration-700 uppercase tracking-tighter">
                            KHUDIRAM.
                        </h3>
                        <p className="text-xl md:text-2xl normal-case italic text-zinc-300 border-l-8 border-green-600 pl-8 leading-tight max-w-xl uppercase font-bold">
                            The youngest smiled at the gallows at 18. <br />
                            <span className="text-sm md:text-base mt-6 block text-zinc-500 font-sans uppercase font-bold tracking-widest not-italic">
                                No one is too young to stand for truth when the system fails our family.
                            </span>
                        </p>
                    </div>
                    <div className="h-[500px] lg:h-auto overflow-hidden order-1 lg:order-2">
                        <img 
                            src="https://media.assettype.com/nationalherald%2F2017-08%2Fc0d5d757-a7d1-48fc-bf80-abb564f0c2f6%2Fremembering-khudiram-bose-the-youngest-revolutionary-martyr-of-indias-freedom-struggle.jpg"
                            className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                            alt="Khudiram"
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM TRANSITION */}
            <div className="mt-20 flex flex-col items-center">
                <p className="text-zinc-600 text-[10px] tracking-[1.5em] font-black mb-8">AUTHENTIC_LEGACY</p>
                <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
            </div>
        </section>
    )
}

export default Martyrs