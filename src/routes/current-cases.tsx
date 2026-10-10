import { createFileRoute } from '@tanstack/react-router';
import { CurrentCasesPage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/current-cases')({ head: () => pageHead('Current cases', 'Follow developing stories, hearings, and new information.'), component: CurrentCasesPage });
