import React from 'react'

const Martyrs = () => {
    return (
        <section className="bg-zinc-950 pt-20 pt-32">
            <div className="px-8 mb-20">
                <h2 className="text-xs tracking-[1em] text-orange-600 mb-4 font-bold">THE_FOUNDATION</h2>
                <div className="h-1 w-40 bg-orange-600"></div>
            </div>

            {/* BOSE */}
            <div className="grid lg:grid-cols-2 border-y border-white/5 group overflow-hidden">
                <div className="p-12 md:p-24 flex flex-col justify-center order-2 lg:order-1">
                    <h3 className="text-7xl md:text-9xl italic leading-none mb-6 group-hover:text-orange-600 transition-colors">BOSE.</h3>
                    <p className="text-xl normal-case italic text-zinc-400 border-l-4 border-orange-600 pl-6 leading-relaxed">
                        "GIVE ME BLOOD, AND I SHALL GIVE YOU FREEDOM." <br />
                        HE DIDN'T BUILD THE INA SO WE COULD STAND SILENT WHEN OUR BROTHERS AND SISTERS ARE DENIED JUSTICE.
                    </p>
                </div>
                <div className="h-[400px] md:h-full bg-[url('https://res.cloudinary.com/dkplc2mbj/image/upload/v1679999620/Subhas_Chandra_Bose_Congress_Sandesh_f4119e6d3f.jpg')] bg-cover bg-center contrast-125 order-1 lg:order-2"></div>
            </div>

            {/* BHAGAT */}
            <div className="grid lg:grid-cols-2 border-b border-white/5 group overflow-hidden">
                <div className="h-[400px] md:h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/54/Bhagat_Singh_1929.jpg')] bg-cover bg-center contrast-125"></div>
                <div className="p-12 md:p-24 flex flex-col justify-center">
                    <h3 className="text-7xl md:text-9xl italic leading-none mb-6 group-hover:text-white transition-colors">BHAGAT.</h3>
                    <p className="text-xl normal-case italic text-zinc-400 border-l-4 border-white pl-6 leading-relaxed">
                        "THEY MAY KILL ME, BUT THEY CANNOT KILL MY IDEAS." <br />
                        AT 23, HE FACED THE GALLOWS FOR US. TODAY, OUR BROTHERS AND SISTERS ARE LOST TO INJUSTICE — WILL WE HONOR HIS SACRIFICE WITH ACTION?
                    </p>
                </div>
            </div>

            {/* KHUDIRAM */}
            <div className="grid lg:grid-cols-2 border-y border-white/5 group overflow-hidden">
                <div className="p-12 md:p-24 flex flex-col justify-center order-2 lg:order-1">
                    <h3 className="text-5xl md:text-7xl italic leading-none mb-6 group-hover:text-green-600 transition-colors">KHUDIRAM.</h3>
                    <p className="text-xl italic text-zinc-400 border-l-4 border-green-600 pl-6 leading-relaxed uppercase">
                        The youngest revolutionary smiled at the gallows at 18. He reminds us: no one is too young to stand for truth when the system fails our family.
                    </p>
                </div>
                <div className="h-[400px] md:h-full bg-[url('https://media.assettype.com/nationalherald%2F2017-08%2Fc0d5d757-a7d1-48fc-bf80-abb564f0c2f6%2Fremembering-khudiram-bose-the-youngest-revolutionary-martyr-of-indias-freedom-struggle.jpg?rect=0%2C0%2C1024%2C576&auto=format%2Ccompress&fmt=webp&w=400&dpr=2.6')] bg-cover bg-center contrast-125 order-1 lg:order-2"></div>
            </div>
        </section>
    )
}

export default Martyrs