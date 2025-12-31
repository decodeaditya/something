import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert, Flame, X, Menu, MoveRight, MoveLeft,
  Target, Skull, Mail, Zap, Fingerprint, Info,
  BookOpen, Activity, Share2, ExternalLink, ShieldCheck, Newspaper,
  History,
  Scale,
  Sword
} from 'lucide-react';

// --- DATA ARCHIVE ---
const ALL_CASES = [
  {
    id: "01",
    slug: "anjel-chakma",
    name: "ANJEL CHAKMA",
    headline: "OUR BROTHER FROM THE NORTHEAST",
    tag: "UTTARAKHAND // HATE CRIME",
    authorityEmail: "sp-dehradun@uk.gov.in",
    summary: "He was one of us — a 24-year-old son of Bharat from Tripura, stabbed after racial slurs in Dehradun on December 9, 2025. He fought for 16 days before leaving us. The system delayed justice, but we will not forget our brother.",
    analysis: "This is not just a crime — it's an attack on every Indian from the Northeast. When they target one, they target all of us. Persistent discrimination cannot be tolerated in our Republic.",
    img: "https://static.toiimg.com/thumb/msid-126211451,width-1200,height-900,resizemode-4/126211451.jpg",
    bns_section: "BNS 103(1) (Murder), Potential SC/ST Act if applicable",
    newsLink: "https://timesofindia.indiatimes.com/india/im-indian-tripura-students-last-words-before-he-was-killed-in-a-racial-attack-protests-erupt-seeking-justice/articleshow/126209417.cms",
    featured: true
  },
  {
    id: "08",
    slug: "unnao-case",
    name: "UNNAO SURVIVOR",
    headline: "OUR DAUGHTER TARGETED BY POWER",
    tag: "UP // POLITICAL RAPE",
    authorityEmail: "home-up@nic.in",
    summary: "A minor daughter raped by an MLA in 2017. Her family attacked, father murdered in custody. She survived to fight — we fight with her.",
    analysis: "When politicians weaponize power against the weak, the Republic bleeds. She is our daughter. Her courage demands our action.",
    img: "https://static01.nyt.com/images/2012/12/30/world/sub30DELHIimage1/sub30DELHIimage1-articleLarge.jpg",
    bns_section: "BNS 103 (Murder), POCSO Act",
    newsLink: "https://en.wikipedia.org/wiki/2017_Unnao_rape_case",
    featured: false
  },
  {
    id: "04",
    slug: "ankita-bhandari",
    name: "ANKITA BHANDARI",
    headline: "OUR SISTER MURDERED FOR SAYING NO",
    tag: "UTTARAKHAND // ELITE CRIME",
    authorityEmail: "dm-pau@nic.in",
    summary: "19-year-old Ankita, our brave sister, refused 'special services' and paid with her life in 2022. The resort was demolished to hide evidence. She deserved protection — we all do.",
    analysis: "Power cannot silence dignity. When influential men destroy evidence, they destroy faith in justice. Ankita was family to us all.",
    img: "https://media.assettype.com/nationalherald%2F2022-10%2Ffe982ebd-2745-4b33-bb33-32b9fb34593e%2FAnkita_Bhandari_Resort.jpeg",
    bns_section: "BNS 103 (Murder), BNS 64 (Rape), BNS 238 (Evidence Destruction)",
    newsLink: "https://en.wikipedia.org/wiki/Murder_of_Ankita_Bhandari",
    featured: false
  },
  {
    id: "05",
    slug: "hathras-case",
    name: "HATHRAS VICTIM",
    headline: "OUR DALIT SISTER'S VOICE SILENCED",
    tag: "UP // CASTE ATROCITY",
    authorityEmail: "sp-hathras-up@nic.in",
    summary: "A young Dalit daughter of Bharat gang-raped and murdered in 2020. Police forcibly cremated her at midnight, denying her family closure. We stand with her forever.",
    analysis: "Caste violence backed by state power is betrayal of Ambedkar's dream. She was our sister — her pain is our pain, her fight is our fight.",
    img: "https://www.indexoncensorship.org/wp-content/uploads/2025/04/Girls-holding-candles-at-protest-scaled.jpg",
    bns_section: "SC/ST Act, BNS 64 (Rape), BNS 238 (Evidence Destruction)",
    newsLink: "https://en.wikipedia.org/wiki/2020_Hathras_gang_rape_and_murder",
    featured: false
  },
  {
    id: "06",
    slug: "manipur-women",
    name: "MANIPUR SISTERS",
    headline: "PARADED NAKED — OUR MOTHERS & DAUGHTERS",
    tag: "MANIPUR // ETHNIC VIOLENCE",
    authorityEmail: "dgp-manipur@nic.in",
    summary: "Kuki women — our sisters and mothers — paraded naked and assaulted in 2023 amid ethnic clashes. Their dignity stripped, but not their spirit. Justice delayed is justice denied.",
    analysis: "Sexual violence as a weapon in conflict shames the entire nation. These are our family members from Manipur. Silence is complicity.",
    img: "https://www.aljazeera.com/wp-content/uploads/2023/07/33PH9V7-highres-1689952680.jpg",
    bns_section: "BNS 74 (Outraging Modesty), BNS 103 (Murder)",
    newsLink: "https://www.bbc.com/news/world-asia-india-66253389",
    featured: false
  },
  {
    id: "07",
    slug: "delhi-hit-run",
    name: "ANJALI SINGH",
    headline: "OUR SISTER DRAGGED 12KM UNDER A CAR",
    tag: "DELHI // SYSTEMIC APATHY",
    authorityEmail: "cp.delhi@nic.in",
    summary: "Anjali, our sister, trapped and dragged for kilometers on New Year's 2023. Bystanders watched. The system failed her. We will not fail her memory.",
    analysis: "Apathy kills as surely as the crime. She could have been any of us — daughter, sister, friend. Society must wake up.",
    img: "https://th-i.thgim.com/public/incoming/653evw/article68237058.ece/alternates/FREE_1200/11908_31_5_2024_17_18_2_3_DSC_8345.JPG",
    bns_section: "BNS 103 (Murder), BNS 106 (Negligence)",
    newsLink: "https://en.wikipedia.org/wiki/Death_of_Anjali_Singh",
    featured: false
  },
];

export default function DigitalWarRoom() {
  const [route, setRoute] = useState({ page: 'home', slug: null });
  const [menuOpen, setMenuOpen] = useState(false);

  // --- ROUTING LOGIC ---
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '');
      if (!hash) setRoute({ page: 'home', slug: null });
      else if (hash === 'about') setRoute({ page: 'about', slug: null });
      else if (hash.startsWith('case/')) setRoute({ page: 'detail', slug: hash.split('/')[1] });
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (path) => {
    window.location.hash = `#/${path}`;
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const activeCase = route.slug ? ALL_CASES.find(c => c.slug === route.slug) : null;
  const featuredCase = ALL_CASES.find(c => c.featured);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-black uppercase selection:bg-orange-600 overflow-x-hidden">

      {/* TACTICAL NAV */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('')}>
          <Fingerprint className="text-orange-600" size={28} />
          <span className="text-2xl tracking-tighter italic">REPUBLIC<span className='text-green-500'>.EXE</span></span>
        </div>

        <div className="hidden lg:flex gap-10 text-[18px] font-bold">
          <button onClick={() => navigate('')} className={route.page === 'home' ? 'text-orange-500' : 'text-zinc-500 hover:text-white'}>WAR_ROOM</button>
          <button onClick={() => navigate('about')} className={route.page === 'about' ? 'text-orange-500' : 'text-zinc-500 hover:text-white'}>MANIFESTO</button>
          <div className="flex items-center gap-2 text-green-500/50">
            <Activity size={14} className="animate-pulse" />
            <span>LIVE_INTEL_FEED</span>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-orange-600">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-black z-[105] flex flex-col justify-center p-12 gap-6">
            <button onClick={() => navigate('')} className="text-4xl font-black italic text-left">WAR_ROOM</button>
            <button onClick={() => navigate('about')} className="text-4xl font-black italic text-left">MANIFESTO</button>
            <button onClick={() => setMenuOpen(false)} className="mt-10 text-orange-600 flex items-center gap-2 tracking-widest"><X /> CLOSE</button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {route.page === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            {/* FEATURED CASE HERO */}
            {featuredCase && (
              <section className="relative h-dvh w-full overflow-hidden flex items-end">
                <img src={featuredCase.img} className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125" alt={featuredCase.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="relative z-10 p-8 md:p-20 w-full">
                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <span className="bg-orange-600 text-black px-4 py-1 text-xs tracking-[0.3em] font-bold mb-6 inline-block">{featuredCase.headline}</span>
                    <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] italic tracking-tighter mb-8">{featuredCase.name}</h1>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <p className="max-w-xl text-lg normal-case font-medium text-zinc-300 italic">{featuredCase.summary}</p>
                      <button
                        onClick={() => navigate(`case/${featuredCase.slug}`)}
                        className="bg-white text-black px-10 py-6 text-xl flex items-center gap-4 hover:bg-orange-600 hover:text-white transition-all"
                      >
                        OPEN_DOSSIER <MoveRight />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}
            

            {/* MARTYR ANCHORS */}
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


          {/* CASE GRID */}
            <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
              <h3 className="text-3xl md:text-5xl italic text-center mb-20 flex flex-col md:flex-row items-center justify-center gap-6">
                <Target className="text-orange-600" size={48} />
                <span>WE WILL NOT FORGET OUR FAMILY</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {ALL_CASES.map(item => (
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
                      <p className="text-base md:text-lg normal-case text-zinc-200 italic leading-relaxed opacity-90">
                        {item.summary}
                      </p>
                      <div className="mt-10 flex justify-end">
                        <span className="text-orange-600 flex items-center gap-4 text-sm md:text-base tracking-widest group-hover:gap-8 transition-all">
                          OPEN_DOSSIER <MoveRight size={24} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* DETAIL PAGE */}
        {route.page === 'detail' && activeCase && (
          <motion.div key="detail" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <button onClick={() => navigate('')} className="flex items-center gap-2 text-orange-600 mb-12 text-sm italic hover:gap-4 transition-all tracking-widest">
              <MoveLeft /> WAR_ROOM
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
        )}

        {/* ABOUT PAGE */}
        {route.page === 'about' && (
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
            <button onClick={() => navigate('')} className="bg-white text-black px-16 py-8 italic hover:bg-orange-600 transition-all">
              RETURN TO THE FIGHT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="p-20 border-t border-zinc-900 bg-black flex flex-col items-center">
        <Flame className="text-red-600 mb-6 animate-bounce" size={48} />
        <p className="text-[24px] text-zinc-700 uppercase">INDIA THAT IS BHARAT</p>
        <p className="text-lg normal-case italic text-zinc-500 mt-8">We remember. We act. For our family.</p>
        <div className="mt-12 flex gap-12">
          <History className="text-orange-600 cursor-pointer" size={32} />
          <Scale className="text-zinc-600 cursor-pointer" size={32} />
          <Sword className="text-green-600 cursor-pointer" size={32} />
        </div>
      </footer>
    </div>
  );
}