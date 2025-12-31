import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert, Flame, X, Menu, MoveRight, MoveLeft,
  Target, Skull, Mail, Zap, Fingerprint, Info,
  BookOpen, Activity, Share2, ExternalLink, ShieldCheck, Newspaper
} from 'lucide-react';

// --- DATA ARCHIVE ---
const ALL_CASES = [
  {
    id: "01",
    slug: "anjel-chakma",
    name: "ANJEL CHAKMA",
    headline: "RACIAL ATTACK IN DEHRADUN",
    tag: "UTTARAKHAND // HATE CRIME",
    authorityEmail: "sp-dehradun@uk.gov.in",
    summary: "24-year-old Tripura student stabbed after alleged racial slurs in Dehradun on December 9, 2025; succumbed after 16 days in hospital amid claims of delayed FIR.",
    analysis: "Highlights persistent discrimination against Northeast Indians; police deny racial motive, but protests demand justice and anti-racism measures.",
    img: "https://static.toiimg.com/thumb/msid-126211451,width-1200,height-900,resizemode-4/126211451.jpg", // News image of protest or related
    bns_section: "BNS 103(1) (Murder), Potential SC/ST Act if applicable",
    newsLink: "https://timesofindia.indiatimes.com/india/im-indian-tripura-students-last-words-before-he-was-killed-in-a-racial-attack-protests-erupt-seeking-justice/articleshow/126209417.cms",
    featured: false
  },
  {
    id: "03",
    slug: "pune-porsche",
    name: "PUNE PORSCHE CRASH",
    headline: "ELITE EVASION",
    tag: "MAHARASHTRA // FORENSIC FRAUD",
    authorityEmail: "cp.pune@mahapolice.gov.in",
    summary: "Drunk minor driving Porsche killed two in May 2024; blood samples swapped, lenient initial treatment; trial ongoing in 2025 with adult prosecution debates.",
    analysis: "Exposes privilege in justice system; multiple arrests for tampering, but delays highlight systemic bias favoring the influential.",
    img: "https://c.ndtvimg.com/2024-05/eoj00p2o_pune-porsche-_625x300_22_May_24.jpg",
    bns_section: "BNS 106 (Negligence Causing Death), Evidence Tampering",
    newsLink: "https://en.wikipedia.org/wiki/2024_Pune_Porsche_car_crash",
    featured: false
  },
  {
    id: "04",
    slug: "ankita-bhandari",
    name: "ANKITA BHANDARI",
    headline: "THE RESORT COVER-UP",
    tag: "UTTARAKHAND // ELITE CRIME",
    authorityEmail: "dm-pau@nic.in",
    summary: "19-year-old receptionist murdered in 2022 after refusing 'special services'; resort demolished destroying evidence; trial ongoing.",
    analysis: "Demonstrates how power influences evidence handling and justice delays in cases involving VIPs.",
    img: "https://media.assettype.com/nationalherald%2F2022-10%2Ffe982ebd-2745-4b33-bb33-32b9fb34593e%2FAnkita_Bhandari_Resort.jpeg",
    bns_section: "BNS 103 (Murder), BNS 64 (Rape), BNS 238 (Evidence Destruction)",
    newsLink: "https://en.wikipedia.org/wiki/Murder_of_Ankita_Bhandari",
    featured: true
  },
  {
    id: "05",
    slug: "hathras-case",
    name: "HATHRAS VICTIM",
    headline: "MIDNIGHT CREMATION",
    tag: "UP // CASTE ATROCITY",
    authorityEmail: "sp-hathras-up@nic.in",
    summary: "Dalit woman gang-raped and murdered in 2020; forced cremation by police; convictions in 2024-2025 amid appeals.",
    analysis: "Symbolizes state complicity in destroying evidence in caste-based crimes; ongoing legal battles.",
    img: "https://www.indexoncensorship.org/wp-content/uploads/2025/04/Girls-holding-candles-at-protest-scaled.jpg",
    bns_section: "SC/ST Act, BNS 64 (Rape), BNS 238 (Evidence Destruction)",
    newsLink: "https://en.wikipedia.org/wiki/2020_Hathras_gang_rape_and_murder",
    featured: false
  },
  {
    id: "06",
    slug: "manipur-women",
    name: "MANIPUR WOMEN",
    headline: "PARADED IN SHAME",
    tag: "MANIPUR // ETHNIC VIOLENCE",
    authorityEmail: "dgp-manipur@nic.in",
    summary: "Kuki women paraded naked and sexually assaulted in 2023 amid ethnic clashes; arrests in 2024, trials active.",
    analysis: "Weaponization of sexual violence in conflict; delayed justice due to political and logistical issues.",
    img: "https://www.aljazeera.com/wp-content/uploads/2023/07/33PH9V7-highres-1689952680.jpg",
    bns_section: "BNS 74 (Outraging Modesty), BNS 103 (Murder)",
    newsLink: "https://www.bbc.com/news/world-asia-india-66253389",
    featured: false
  },
  {
    id: "07",
    slug: "delhi-hit-run",
    name: "ANJALI SINGH",
    headline: "DRAGGED FOR 12KM",
    tag: "DELHI // SYSTEMIC APATHY",
    authorityEmail: "cp.delhi@nic.in",
    summary: "Woman dragged under car for kilometers in 2023; accused convicted, but highlights bystander and police inaction.",
    analysis: "Reveals deep apathy in society and response systems; justice achieved but preventive failures remain.",
    img: "https://th-i.thgim.com/public/incoming/653evw/article68237058.ece/alternates/FREE_1200/11908_31_5_2024_17_18_2_3_DSC_8345.JPG",
    bns_section: "BNS 103 (Murder), BNS 106 (Negligence)",
    newsLink: "https://en.wikipedia.org/wiki/Death_of_Anjali_Singh",
    featured: false
  },
  {
    id: "08",
    slug: "unnao-case",
    name: "UNNAO SURVIVOR",
    headline: "STATE-SPONSORED TERROR",
    tag: "UP // POLITICAL RAPE",
    authorityEmail: "home-up@nic.in",
    summary: "Minor raped by MLA in 2017; family targeted, father killed; perpetrator convicted but appeals ongoing.",
    analysis: "Exemplifies political interference in justice; long delays in high-profile power abuse cases.",
    img: "https://static01.nyt.com/images/2012/12/30/world/sub30DELHIimage1/sub30DELHIimage1-articleLarge.jpg",
    bns_section: "BNS 103 (Murder), POCSO Act",
    newsLink: "https://en.wikipedia.org/wiki/2017_Unnao_rape_case",
    featured: false
  }
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

        <div className="hidden lg:flex gap-10 text-[10px] tracking-[0.4em] font-bold">
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
            <button onClick={() => navigate('')} className="text-6xl font-black italic text-left">WAR_ROOM</button>
            <button onClick={() => navigate('about')} className="text-6xl font-black italic text-left">MANIFESTO</button>
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
                <img src={featuredCase.img} className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="relative z-10 p-8 md:p-20 w-full">
                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <span className="bg-orange-600 text-black px-4 py-1 text-xs tracking-[0.3em] font-bold mb-6 inline-block">FEATURED</span>
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

            {/* MARTYR ANCHORS (BOSE/BHAGAT) */}
            <section className="bg-zinc-950 py-20">
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
                    HE DIDN'T BUILD THE INA SO YOU COULD REMAIN A SILENT WITNESS TO INJUSTICE.
                  </p>
                </div>
                <div className="h-[400px] md:h-full bg-[url('https://res.cloudinary.com/dkplc2mbj/image/upload/v1679999620/Subhas_Chandra_Bose_Congress_Sandesh_f4119e6d3f.jpg')] bg-cover bg-center contrast-125 order-1 lg:order-2"></div>
              </div>

              {/* BHAGAT */}
              <div className="grid lg:grid-cols-2 border-b border-white/5 group overflow-hidden">
                <div className="h-[400px] md:h-full bg-[url('https://i.ndtvimg.com/i/2015-03/bhagat-singh_650x400_71427105722.jpg?downsize=545:307')] bg-cover bg-center contrast-125"></div>
                <div className="p-12 md:p-24 flex flex-col justify-center">
                  <h3 className="text-7xl md:text-9xl italic leading-none mb-6 group-hover:text-white transition-colors">BHAGAT.</h3>
                  <p className="text-xl normal-case italic text-zinc-400 border-l-4 border-white pl-6 leading-relaxed">
                    "THEY MAY KILL ME, BUT THEY CANNOT KILL MY IDEAS." <br />
                    AT 23, HE FACED THE NOOSE. AT 23, YOU ARE SCROLLING. IT'S TIME TO ACT.
                  </p>
                </div>
              </div>
              {/* KHUDIRAM */}
              <div className="grid lg:grid-cols-2 border-y border-white/5 group overflow-hidden">
                <div className="p-12 md:p-24 flex flex-col justify-center order-2 lg:order-1">
                  <h3 className="text-5xl md:text-7xl italic leading-none mb-6 group-hover:text-green-600 transition-colors">KHUDIRAM.</h3>
                  <p className="text-xl italic text-zinc-400 border-l-4 border-green-600 pl-6 leading-relaxed uppercase">
                    The boy-martyr of the soil. At 18, he smiled at the gallows, reminding us that there is no age too young to demand truth from a corrupted system.
                  </p>
                </div>
                <div className="h-[400px] md:h-full bg-[url('https://media.assettype.com/nationalherald%2F2017-08%2Fc0d5d757-a7d1-48fc-bf80-abb564f0c2f6%2Fremembering-khudiram-bose-the-youngest-revolutionary-martyr-of-indias-freedom-struggle.jpg?rect=0%2C0%2C1024%2C576&auto=format%2Ccompress&fmt=webp&w=400&dpr=2.6')] bg-cover bg-center contrast-125 order-1 lg:order-2"></div>
              </div>

            </section>


            {/* GRID FEED */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
              <h3 className="text-2xl italic mb-16 flex items-center gap-4"><Target className="text-orange-600" />SPEAK_UP_NOW</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALL_CASES.map(item => (
                  <div key={item.id} onClick={() => navigate(`case/${item.slug}`)} className="group cursor-pointer border border-white/5 bg-zinc-900/20 hover:border-orange-600/50 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="p-6">
                      <span className="text-orange-600 text-[9px] tracking-widest block mb-2">{item.tag}</span>
                      <h4 className="text-3xl italic mb-4">{item.name}</h4>
                      <p className="text-xs normal-case text-zinc-500 line-clamp-2">{item.summary}</p>
                    </div>
                  </div>
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
              <div className="lg:col-span-2 space-y-10">
                <h1 className="text-[10vw] italic leading-[0.8] tracking-tighter">{activeCase.name}</h1>
                <img src={activeCase.img} className="w-full border border-white/5 shadow-2xl" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/80 p-8 border-l-4 border-orange-600">
                    <h4 className="text-xs tracking-widest text-orange-600 mb-4 flex items-center gap-2"><Activity size={14} /> SYSTEM_ANALYSIS</h4>
                    <p className="text-lg normal-case text-zinc-200 font-medium leading-relaxed italic">{activeCase.analysis}</p>
                  </div>
                  <div className="bg-zinc-900/80 p-8 border-l-4 border-white">
                    <h4 className="text-xs tracking-widest text-white mb-4 flex items-center gap-2"><ShieldCheck size={14} /> BNS_RELEVANCE</h4>
                    <p className="text-lg text-zinc-400 font-mono italic">{activeCase.bns_section}</p>
                  </div>
                </div>
                <div className="bg-zinc-900/80 p-8 border-l-4 border-green-600">
                  <h4 className="text-xs tracking-widest text-green-600 mb-4 flex items-center gap-2"><Activity size={14} /> LONG_STORY_SHORT</h4>
                  <p className="text-lg normal-case text-zinc-200 font-medium leading-relaxed italic">{activeCase.summary}</p>
                </div>

                {/* VERIFICATION BUTTONS */}
                <div className="flex flex-wrap gap-4">
                  <a href={activeCase.newsLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-zinc-800 px-6 py-4 text-xs hover:bg-white hover:text-black transition-all">
                    <Newspaper size={16} /> VERIFY_VIA_NEWS
                  </a>
                  <button onClick={() => {
                    navigator.share ? navigator.share({ title: activeCase.name, url: window.location.href }) : navigator.clipboard.writeText(window.location.href);
                  }} className="flex items-center gap-3 bg-zinc-800 px-6 py-4 text-xs hover:bg-orange-600 transition-all">
                    <Share2 size={16} /> AMPLIFY_SIGNAL
                  </button>
                </div>
              </div>

              {/* ACTION WIDGET */}
              <div className="h-fit">
                <div className="bg-white text-black p-10 sticky top-32 shadow-[20px_20px_0px_0px_rgba(234,88,12,1)]">
                  <Zap className="mb-6 text-orange-600" size={40} fill="currentColor" />
                  <h3 className="text-4xl italic mb-6 leading-none">INITIATE_STRIKE</h3>
                  <p className="text-xs normal-case font-bold mb-8 leading-relaxed opacity-60">
                    Demand accountability. Fire a direct legal demand to the concerned authority's inbox.
                  </p>
                  <button
                    onClick={() => {
                      const body = `Authority,\n\nI demand justice for ${activeCase.name}.\nAnalysis: ${activeCase.analysis}\nBNS: ${activeCase.bns_section}`;
                      window.location.href = `mailto:${activeCase.authorityEmail}?subject=URGENT: JUSTICE FOR ${activeCase.name}&body=${encodeURIComponent(body)}`;
                    }}
                    className="w-full bg-orange-600 text-white p-6 text-xl flex items-center justify-between hover:bg-black transition-all"
                  >
                    SEND_MAIL <Mail />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ABOUT PAGE */}
        {route.page === 'about' && (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 pb-20 px-8 max-w-4xl mx-auto text-center">
            <h1 className="text-[12vw] italic tracking-tighter text-orange-600 mb-12 leading-none">MANIFESTO.</h1>
            <p className="text-3xl normal-case italic text-zinc-400 leading-tight mb-12">
              The soil never forgets. We are a digital archive of institutional failure, powered by the resolve of Bose and Bhagat Singh.
            </p>
            <button onClick={() => navigate('')} className="bg-white text-black px-12 py-6 text-2xl italic hover:bg-orange-600 transition-all">
              BACK_TO_FRONT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-32 bg-zinc-950 border-t border-white/5 text-center mt-40">
        <Skull size={48} className="mx-auto text-zinc-900 mb-6" />
        <p className="text-orange-600 tracking-[1em] text-[8px] font-mono opacity-40">THE SOIL NEVER FORGETS // 2025</p>
      </footer>
    </div>
  );
}