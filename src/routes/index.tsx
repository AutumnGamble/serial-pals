import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/')({ head: () => pageHead('Fresh from the files', 'True crime, horror, and strange stories with good company.'), component: HomePage });
