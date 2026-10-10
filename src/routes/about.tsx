import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/about')({ head: () => pageHead('About Serial Pals', 'Curious minds, good company, and a little morbid curiosity.'), component: AboutPage });
