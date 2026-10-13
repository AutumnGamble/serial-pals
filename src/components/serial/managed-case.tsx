import { ArrowDown, ExternalLink } from 'lucide-react';
import { getManagedCase, posts, type ContentSection } from '@/data/content';
import { CaseMetadata, EvidenceStamp, PaperNote, Timeline, WitnessCard, PolaroidPostCard } from './primitives';

function Paragraphs({ text }: { text?: string }) {
  if (!text) return null;
  return <>{text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</>;
}

function SectionBlock({ section, index }: { section: ContentSection; index: number }) {
  const id = `section-${index + 1}`;
  if (section.type === 'image') {
    return <figure className="article-photo" id={id}>
      {section.image && <img src={section.image} width={1100} height={700} alt={section.heading || section.caption || 'Editorial exhibit'} loading="lazy" />}
      {section.caption && <figcaption>{section.label ? `${section.label} / ` : ''}{section.caption}</figcaption>}
    </figure>;
  }
  if (section.type === 'timeline') {
    return <section id={id}>
      {section.label && <span className="document-label">{section.label}</span>}
      {section.heading && <h2>{section.heading}</h2>}
      <Timeline items={section.items || []} />
    </section>;
  }
  if (section.type === 'dossiers') {
    return <section id={id}>
      {section.label && <span className="document-label">{section.label}</span>}
      {section.heading && <h2>{section.heading}</h2>}
      <div className="witness-grid">
        {(section.people || []).map((person) => <WitnessCard key={`${person.name}-${person.role}`} name={person.name} role={person.role}>
          {person.image && <img src={person.image} alt={person.name} loading="lazy" style={{width:'100%',aspectRatio:'4/3',objectFit:'cover',marginBottom:'0.75rem'}} />}
          <p>{person.bio}</p>
        </WitnessCard>)}
      </div>
    </section>;
  }
  if (section.type === 'sources') {
    return <section id={id}>
      {section.label && <span className="document-label">{section.label}</span>}
      {section.heading && <h2>{section.heading}</h2>}
      <Paragraphs text={section.body} />
      {(section.links || []).map((link) => <a className="source-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
        <span><strong>{link.title}</strong>{link.note && <><br />{link.note}</>}</span><ExternalLink size={16} />
      </a>)}
    </section>;
  }
  return <section id={id}>
    {section.label && <span className="document-label">{section.label}</span>}
    {section.heading && <h2>{section.heading}</h2>}
    <Paragraphs text={section.body} />
  </section>;
}

export function ManagedCasePage({ slug }: { slug: string }) {
  const post = getManagedCase(slug);
  if (!post) return null;
  const sections = post.sections || [];
  return <>
    <a href="#/files" className="back-link">← BACK TO THE FILES</a>
    <div className="article-heading">
      <span className="document-label">{post.fictional ? 'FICTIONAL SAMPLE / ' : ''}{post.category} / THE SERIAL PALS FILE</span>
      <h1>{post.title}</h1>
      <CaseMetadata post={post} />
      <EvidenceStamp>{post.status || 'OPEN FILE'}</EvidenceStamp>
    </div>
    {post.fictional && <PaperNote title="FICTION NOTICE" className="wide-note"><p>This case file is fictional and is being used to demonstrate the Serial Pals editorial format. Any external sources linked below provide general background only.</p></PaperNote>}
    {post.image && <figure className="article-photo"><img src={post.image} width={1200} height={760} alt={post.title} /><figcaption>HERO IMAGE / EDITORIAL DISPLAY</figcaption></figure>}
    <div className="article-layout">
      <article className="article-copy">{sections.map((section, index) => <SectionBlock section={section} index={index} key={`${section.type}-${index}`} />)}</article>
      <aside className="article-sidebar">
        <PaperNote title="IN THIS FILE"><nav aria-label="Article contents">{sections.map((section, index) => <a key={`${section.type}-${index}`} href={`#section-${index + 1}`}>{String(index + 1).padStart(2,'0')} / {section.heading || section.type}<ArrowDown size={12}/></a>)}</nav></PaperNote>
        {post.note && <PaperNote title="PAL’S NOTE"><p>{post.note}</p><span className="handwritten">Keep asking questions. ♡</span></PaperNote>}
      </aside>
    </div>
    <section className="related-section"><span className="document-label">KEEP THE FILE OPEN</span><h2>Related Serial Pals files.</h2><div className="post-grid">{posts.filter((item) => item.id !== slug).slice(0,3).map((item, index) => <PolaroidPostCard key={item.id} post={item} index={index} />)}</div></section>
  </>;
}
