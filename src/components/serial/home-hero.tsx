import { AudioLines, Fingerprint, FileQuestion, MapPin, Paperclip, Search, CassetteTape } from 'lucide-react';
import logo from '@/assets/logo.png.asset.json';

export function HomeHero() {
  return <section className="home-hero" aria-labelledby="home-title">
    <div className="hero-token token-file" aria-hidden="true"><Paperclip size={18}/><span>CASE FILE<br/><strong>SP–001</strong></span><FileQuestion size={24}/></div>
    <div className="hero-token token-fingerprint" aria-hidden="true"><Fingerprint size={58} strokeWidth={1}/><span>ONE MORE QUESTION.</span></div>
    <div className="hero-token token-tape" aria-hidden="true"><CassetteTape size={43} strokeWidth={1}/><span>PLAY IT AGAIN.</span></div>
    <div className="hero-token token-location" aria-hidden="true"><MapPin size={17}/><span>FOLLOW THE STORY</span></div>
    <span className="hero-stamp" aria-hidden="true">STAY CURIOUS</span>
    <span className="hero-scribble" aria-hidden="true">the plot thickens…</span>
    <Search className="hero-search" size={35} strokeWidth={1.2} aria-hidden="true"/>
    <div className="hero-title-lockup"><span className="hero-eyebrow"><AudioLines size={14}/> GOOD FRIENDS. STRANGE STORIES.</span><h1 id="home-title" className="sr-only">Serial Pals</h1><img src={logo.url} alt="Serial Pals" width={280} height={280} className="hero-title-graphic"/><p>True crime. Horror. A little morbid curiosity.</p><span className="hero-bottom-label">OPEN MINDS · OPEN FILES</span></div>
  </section>;
}