import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Target, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import { ALL_CASES } from '../src/static/database';
import { useNavigate } from 'react-router-dom';
import CaseCard from '../components/CaseCard';

export default function CaseArchive() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic
    const filteredCases = ALL_CASES.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                
                <header className="mb-16 border-b border-zinc-900 pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Activity size={18} className="text-orange-600 animate-pulse" />
                                <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-500">Public_Access_Database</span>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
                                THE ARCHIVE
                            </h1>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-5xl font-black italic text-zinc-800 leading-none">{ALL_CASES.length}</p>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Total_Dossiers</p>
                        </div>
                    </div>
                </header>

                <div className="sticky top-24 z-30 bg-black/80 backdrop-blur-md border border-zinc-800 p-2 mb-16 flex flex-col md:flex-row gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                        <input 
                            type="text" 
                            placeholder="SEARCH_BY_NAME_OR_KEYWORD..."
                            className="w-full bg-zinc-950 border-none py-4 pl-12 pr-4 text-sm font-mono focus:ring-1 focus:ring-orange-600 uppercase"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredCases.map((item) => (
                           <CaseCard key={item.id} {...item} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredCases.length === 0 && (
                    <div className="py-40 text-center border border-dashed border-zinc-800">
                        <Target className="mx-auto text-zinc-800 mb-6" size={48} />
                        <p className="text-zinc-500 font-mono italic">NO_RECORDS_MATCH_YOUR_QUERY</p>
                    </div>
                )}
            </div>
            
           
        </div>
    );
}