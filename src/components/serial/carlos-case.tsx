import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { posts } from '@/data/content';
import { CaseMetadata, EvidenceStamp, PaperNote, Timeline, WitnessCard, PolaroidPostCard } from './primitives';
import court from '@/assets/court.jpg';
import tapes from '@/assets/tapes.jpg';
import house from '@/assets/house.jpg';

const post = posts.find((p) => p.id === 'carlos-vega')!;

const sources = [
  {
    title: 'FBI — Staged Accident Ring',
    note: 'Background on a real staged-crash investigation and the records investigators used to connect repeated collisions.',
    url: 'https://www.fbi.gov/news/stories/staged-accident-ring',
  },
  {
    title: 'NICB — Staged & Caused Accidents',
    note: 'Consumer and investigative overview of staged crashes, planted witnesses, coordinated participants, and injury claims.',
    url: 'https://www.nicb.org/prevent-fraud-theft/staged-and-caused-accidents',
  },
  {
    title: 'FBI — Investigating Insurance Fraud',
    note: 'Federal background on how insurance-fraud investigations develop from documents, patterns, and coordinated activity.',
    url: 'https://www.fbi.gov/news/stories/investigating-insurance-fraud',
  },
  {
    title: 'NICB — Paper Accidents',
    note: 'A real-world example of suspicious claims built around collisions that investigators alleged were staged or fabricated.',
    url: 'https://www.nicb.org/news/regional-news/paper-accidents',
  },
];

export function CarlosCasePage() {
  return (
    <>
      <Link to="/files" className="back-link">← BACK TO THE FILES</Link>

      <div className="article-heading">
        <span className="document-label">FICTIONAL SAMPLE CASE / THE SERIAL PALS FILE</span>
        <h1>Bad luck, on schedule: the Carlos Vega file</h1>
        <CaseMetadata post={post} />
        <EvidenceStamp>PATTERN DETECTED</EvidenceStamp>
      </div>

      <PaperNote title="FICTION NOTICE" className="wide-note">
        <p><strong>Carlos Vega, Mesa Verde, and every person and event in this case file are fictional.</strong> This page is a design-and-editorial sample showing how Serial Pals could organize a fully sourced real case. The linked background articles discuss real insurance-fraud investigations, not Carlos.</p>
      </PaperNote>

      <figure className="article-photo">
        <img src={post.image} width={1200} height={760} alt="Illustrative photograph of a damaged car used for the fictional Carlos Vega case file" />
        <figcaption>EXHIBIT 01 / ILLUSTRATIVE EDITORIAL IMAGE · NOT A REAL CASE SCENE</figcaption>
      </figure>

      <div className="article-layout">
        <article className="article-copy">
          <section id="overview">
            <span className="document-label">01 / THE HOOK</span>
            <h2>Carlos Vega has terrible luck.</h2>
            <p className="article-lead">Five wrecks in five years. Two rear-end collisions. One nighttime rollover. One “hit while parked.” One intersection crash involving a witness who somehow knew Carlos before the police arrived.</p>
            <p>Every time, Carlos walked away. Every time, a claim followed. And every time, the details were just plausible enough to look ordinary when viewed alone.</p>
            <p>The problem starts when you put the files next to each other: the same repair shop, the same medical clinic, repeated passengers, similar injury language, vehicles acquired shortly before crashes, claims filed quickly, and photographs taken even faster.</p>
            <p>Carlos says he is simply unlucky.</p>
            <p><strong>The pattern says otherwise.</strong></p>
          </section>

          <section id="editorial">
            <span className="document-label">02 / EDITORIAL</span>
            <h2>“Accident” is a comforting word.</h2>
            <p>It means nobody planned it. Nobody wanted it. Nobody looked at a guardrail, a parking lot, or another car and saw a payday.</p>
            <p>Carlos’s fictional file becomes interesting not because any single collision is impossible, but because the same kinds of coincidences keep showing up around him.</p>
            <p>Insurance fraud rarely arrives wearing a sign that says <em>fraud</em>. It usually looks like paperwork: a sore neck, a damaged bumper, a witness, a tow bill, a story ordinary enough to be believed.</p>
            <p>Sometimes the most revealing evidence is not a smoking gun. It is repetition.</p>
          </section>

          <section id="timeline">
            <span className="document-label">03 / COLLISION TIMELINE</span>
            <h2>Five accidents. One increasingly familiar cast.</h2>
            <Timeline items={[
              {date:'MAR 2021',title:'Crash #1 — rear-ended',text:'Carlos reports shoulder pain. The car is repaired. Nothing about the claim appears extraordinary on its own.'},
              {date:'NOV 2022',title:'Crash #2 — nighttime intersection',text:'Elena Ruiz is riding with Carlos. Both make injury claims. The same clinic appears in the paperwork.'},
              {date:'AUG 2023',title:'Crash #3 — rollover',text:'Carlos is driving a car owned by Mateo Silva. He says he swerved to avoid an animal. No independent witness is identified.'},
              {date:'FEB 2025',title:'Crash #4 — hit while parked',text:'Carlos reports a hit-and-run. Elena later appears in the related injury paperwork.'},
              {date:'JUN 2026',title:'Crash #5 — low-speed collision',text:'A witness backs Carlos’s account. A later records check links that witness to Mateo.'},
              {date:'JUL 2026',title:'Pattern review begins',text:'An insurer stops reading the claims one at a time and starts comparing names, clinics, vehicles, and dates.'},
              {date:'SEP 2026',title:'The stories stop matching',text:'Separate accounts that sounded plausible alone begin to conflict when investigators place them side by side.'},
            ]} />
          </section>

          <figure className="article-photo">
            <img src={tapes} width={1100} height={700} alt="Illustrative desk and records image representing the fictional Carlos claim files" loading="lazy" />
            <figcaption>EXHIBIT 02 / ILLUSTRATIVE RECORDS IMAGE · FICTIONAL RECONSTRUCTION</figcaption>
          </figure>

          <section id="analysis">
            <span className="document-label">04 / CASE ANALYSIS</span>
            <h2>The pattern is the story.</h2>
            <h3>Pattern 01 — Frequency</h3>
            <p>Five claimed collisions in roughly five years would not prove fraud. It would, however, give an investigator a reason to compare the files rather than treating each event as isolated.</p>
            <h3>Pattern 02 — Familiar faces</h3>
            <p>Three crashes include one of the same two passengers. Real staged-collision schemes can involve coordinated drivers, passengers, and witnesses assigned different roles from claim to claim.</p>
            <h3>Pattern 03 — Medical claims</h3>
            <p>The fictional treatment records repeatedly route through the same clinic for similar soft-tissue complaints. Repetition is not proof of wrongdoing, but it is exactly the kind of relationship investigators would map.</p>
            <h3>Pattern 04 — The cars</h3>
            <p>Carlos favors inexpensive used vehicles purchased or insured shortly before incidents. In a real investigation, ownership dates, coverage changes, prior damage, repair invoices, and salvage history could become important context.</p>
            <h3>Pattern 05 — The helpful witness</h3>
            <p>The fifth collision becomes the hinge point: a supposedly independent witness later turns out to have a connection to someone already in the file. One odd connection may be coincidence. A network of them is harder to ignore.</p>
          </section>

          <section id="people">
            <span className="document-label">05 / CHARACTER DOSSIERS</span>
            <h2>The recurring names.</h2>
            <div className="witness-grid">
              <WitnessCard name="Carlos Vega" role="Central subject · FICTIONAL">
                <p>38. Freelance auto-detailer. Charming, cooperative, and unusually fluent in the mechanics of a claim. He tends to have photographs and paperwork ready before anyone asks.</p>
                <p><strong>Question:</strong> Organizer, participant, opportunist—or simply spectacularly unlucky?</p>
              </WitnessCard>
              <WitnessCard name="Elena Ruiz" role="Recurring passenger · FICTIONAL">
                <p>Carlos’s cousin. Appears in Crash #2, #4, and #5, with similar injury complaints appearing more than once.</p>
                <p><strong>Question:</strong> Passenger, participant, or just someone who spends a lot of time in Carlos’s cars?</p>
              </WitnessCard>
              <WitnessCard name="Mateo Silva" role="Friend / occasional driver · FICTIONAL">
                <p>Owns the vehicle in Crash #3 and appears in the orbit of the witness from Crash #5. His role changes from file to file.</p>
                <p><strong>Question:</strong> Why does the same name keep appearing in different parts of the paperwork?</p>
              </WitnessCard>
              <WitnessCard name="Dr. Adrian Bell" role="Medical provider · FICTIONAL">
                <p>Appears repeatedly in treatment records. The file makes no allegation of misconduct; repeated appearance alone is not evidence of wrongdoing.</p>
                <p><strong>Question:</strong> Is the repetition meaningful, or simply a product of referral patterns?</p>
              </WitnessCard>
              <WitnessCard name="Nina Park" role="Insurance investigator · FICTIONAL">
                <p>The person who stops reading five accidents and starts reading one story. Her working theory is built from relationships, timing, and contradictions—not one dramatic clue.</p>
              </WitnessCard>
            </div>
          </section>

          <figure className="article-photo">
            <img src={court} width={1100} height={700} alt="Illustrative institutional hallway image representing formal review of the fictional Carlos case" loading="lazy" />
            <figcaption>EXHIBIT 03 / ILLUSTRATIVE EDITORIAL IMAGE · NOT A REAL COURTHOUSE OR CASE</figcaption>
          </figure>

          <section id="reading">
            <span className="document-label">06 / RELATED READING</span>
            <h2>Real cases behind the fictional framework.</h2>
            <p>Carlos is invented. These links are real background material on staged collisions and insurance-fraud investigations.</p>
            {sources.map((source) => (
              <a className="source-link" href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                <span><strong>{source.title}</strong><br />{source.note}</span><ExternalLink size={16} />
              </a>
            ))}
          </section>

          <section id="sources">
            <span className="document-label">07 / SOURCE NOTES</span>
            <h2>What these links do—and do not—support.</h2>
            <p>The external sources above support general descriptions of how real staged-accident and insurance-fraud schemes can work. They do <strong>not</strong> support any statement about Carlos Vega, because Carlos does not exist.</p>
            <p>For a real Serial Pals case, this section would separate primary records, official filings, court documents, law-enforcement statements, reputable reporting, and contextual background so readers can see exactly where each claim comes from.</p>
          </section>
        </article>

        <aside className="article-sidebar">
          <PaperNote title="IN THIS FILE">
            <nav aria-label="Carlos case contents">
              {['Overview','Editorial','Timeline','Analysis','People','Reading','Sources'].map((section, index) => (
                <a key={section} href={`#${section.toLowerCase()}`}>0{index + 1} / {section}<ArrowDown size={12} /></a>
              ))}
            </nav>
          </PaperNote>
          <PaperNote title="PAL’S NOTE">
            <p>Read the collisions together, not one at a time.</p>
            <span className="handwritten">Patterns need context. ♡</span>
          </PaperNote>
          <PaperNote title="FILE STATUS">
            <p><strong>FICTIONAL SAMPLE</strong></p>
            <p>Built to test the full Serial Pals case-file format before real reporting goes live.</p>
          </PaperNote>
        </aside>
      </div>

      <figure className="article-photo">
        <img src={house} width={1200} height={760} alt="Illustrative exterior image used as a visual break in the fictional Carlos case file" loading="lazy" />
        <figcaption>EXHIBIT 04 / ILLUSTRATIVE CONTEXT IMAGE · FICTIONAL SAMPLE</figcaption>
      </figure>

      <section className="related-section">
        <span className="document-label">KEEP THE FILE OPEN</span>
        <h2>Related Serial Pals files.</h2>
        <div className="post-grid">
          {posts.filter((p) => p.id !== 'carlos-vega').slice(0,3).map((p, i) => <PolaroidPostCard key={p.id} post={p} index={i} />)}
        </div>
        <div style={{marginTop:'1.5rem'}}>
          <Button asChild variant="outline"><Link to="/files">Browse every file <ArrowUpRight size={15} /></Link></Button>
        </div>
      </section>
    </>
  );
}
