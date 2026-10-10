import { createFileRoute } from '@tanstack/react-router';
import { RadarPage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/on-the-radar')({ head: () => pageHead('On the radar', 'Our watchlist of documentaries, haunted places, and upcoming stories.'), component: RadarPage });
