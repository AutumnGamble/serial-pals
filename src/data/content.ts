import house from '@/assets/house.jpg';
import court from '@/assets/court.jpg';
import forest from '@/assets/forest.jpg';
import cinema from '@/assets/cinema.jpg';
import haunted from '@/assets/haunted.jpg';
import tapes from '@/assets/tapes.jpg';

const carlosHero = 'https://images.unsplash.com/photo-1785220300684-3535eb52f335?auto=format&fit=crop&fm=jpg&q=82&w=1800';

export const categories = ['All files', 'Current Case', 'Trial Watch', 'Unsolved', 'Horror', 'Haunted', 'Case File'] as const;
export type Category = typeof categories[number];
export type Post = { id: string; title: string; category: Category; date: string; image: string; status?: string; excerpt: string; location: string; year: string; note: string };
export const posts: Post[] = [
 {id:'carlos-vega',title:'Bad luck, on schedule: the Carlos Vega file',category:'Case File',date:'2026-10-10',image:carlosHero,status:'PATTERN DETECTED',excerpt:'Five wrecks. Familiar passengers. Familiar paperwork. When does bad luck start looking like a business model?',location:'Mesa Verde, Arizona · FICTIONAL',year:'2021–2026',note:'Read the collisions together, not one at a time.'},
 {id:'hollow-creek',title:'The house on Hollow Creek: what we know so far',category:'Current Case',date:'2026-10-09',image:house,status:'NEW INFORMATION',excerpt:'A quiet street. A missing neighbor. And a timeline that still doesn’t quite add up.',location:'Hollow Creek, Oregon',year:'2026',note:'Follow the timeline, not the rumors.'},
 {id:'jury-room',title:'Inside the jury room: the week that changed the trial',category:'Trial Watch',date:'2026-10-08',image:court,status:'VERDICT WATCH',excerpt:'The testimony, the turning points, and the questions we’re taking into next week.',location:'Millbrook, Vermont',year:'2026',note:'Next hearing: October 14.'},
 {id:'last-turn',title:'The last turn: a disappearance on Route 19',category:'Unsolved',date:'2026-10-06',image:forest,status:'UNSOLVED',excerpt:'One stretch of road. Thirty years of questions. We’re going back to the beginning.',location:'Cedar Falls, Washington',year:'1996',note:'Someone knows something.'},
 {id:'final-girl',title:'The final girl isn’t finished with us yet',category:'Horror',date:'2026-10-04',image:cinema,excerpt:'Why we keep coming back to horror’s most stubborn survivor. Popcorn strongly encouraged.',location:'After-dark screening room',year:'2026',note:'Spoilers ahead. You’ve been warned.'},
 {id:'blackwood',title:'Checking in at Blackwood House. Sleeping? Unlikely.',category:'Haunted',date:'2026-10-02',image:haunted,status:'AFTER DARK',excerpt:'An old house, a very opinionated staircase, and a weekend we’re still talking about.',location:'Blackwood, Massachusetts',year:'2026',note:'Bring a friend. Maybe two.'},
 {id:'missing-tape',title:'The missing tape: listening between the lines',category:'Case File',date:'2026-09-29',image:tapes,status:'DEEP DIVE',excerpt:'A forgotten recording sends us down a rabbit hole of memory, evidence, and everything in between.',location:'Bellweather, Maine',year:'1988',note:'Revisit the original recording.'},
];
export function getPosts(category: Category = 'All files', query = '') {
 return posts.filter(p => (category === 'All files' || p.category === category) && `${p.title} ${p.location} ${p.category}`.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>b.date.localeCompare(a.date));
}
export function formatDate(date: string) { return new Intl.DateTimeFormat('en-US',{month:'short',day:'2-digit',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T12:00:00Z`)); }
export const pals = [
 {name:'Autumn',initials:'AG',role:'The rabbit-hole regular',bio:'Always has one more question, three open tabs, and a coffee that went cold an hour ago.',interests:'Case deep dives · Unsolved mysteries',appearance:'The house on Hollow Creek',tone:'violet'},
 {name:'Jules',initials:'JL',role:'The horror friend',bio:'Here for practical effects, complicated final girls, and a spirited post-movie debate.',interests:'Horror movies · Haunted places',appearance:'The final girl isn’t finished with us yet',tone:'pink'},
 {name:'Morgan',initials:'MR',role:'The fine-print pal',bio:'Reads the footnotes, brings the context, and gently reminds us that a theory is not a fact.',interests:'Trial watch · Documentaries',appearance:'Inside the jury room',tone:'ink'},
];
export const radar = [
 {title:'The documentary everyone is talking about',kind:'DOCUMENTARY',when:'On our watchlist',text:'Before we join the conversation, we’re checking the sources behind the screen.',image:tapes},
 {title:'October’s haunted-house road trip',kind:'HAUNTED',when:'This October',text:'Three attractions, two very brave pals, one extremely questionable itinerary.',image:haunted},
 {title:'A new chapter in the Millbrook trial',kind:'TRIAL WATCH',when:'October 14, 2026',text:'The next hearing is on the calendar. Our notebooks are already open.',image:court},
 {title:'The return of the midnight screening',kind:'HORROR',when:'Coming soon',text:'Repertory horror, big-screen screams, and a few old favorites worth revisiting.',image:cinema},
];
export function pageHead(title: string,description: string) {return {meta:[{title:`${title} — Serial Pals`},{name:'description',content:description},{property:'og:title',content:`${title} — Serial Pals`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
