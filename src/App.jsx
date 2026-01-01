import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Footer } from '../components/Footer'
import DigitalWarRoom from '../pages/Home'
import { Manifesto } from '../pages/Manifesto'
import { Header } from '../components/Header'
import CasePage from '../pages/CasePage'
import ScrollToTop from '../components/ScrollToTop'
import CaseArchive from '../pages/AllCasesArchive'

export const App = () => {

  return (
    <BrowserRouter>
     <div className="bg-[#050505] text-white min-h-screen font-black uppercase selection:bg-orange-600 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<DigitalWarRoom />} />
        <Route path="/about" element={<Manifesto />} />
        <Route path="/case/:slug" element={<CasePage />} />
        <Route path="*" element={<DigitalWarRoom />} />
        <Route path="/archive" element={<CaseArchive />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}
