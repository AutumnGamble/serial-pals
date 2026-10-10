import { createFileRoute } from '@tanstack/react-router';
import { FilesPage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/files/')({ head: () => pageHead('The files', 'Explore the Serial Pals archive of cases, horror, and haunted stories.'), component: FilesPage });
