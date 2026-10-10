import { createFileRoute } from '@tanstack/react-router';
import { PalsPage } from '@/components/serial/pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/the-pals')({ head: () => pageHead('Meet the pals', 'Meet the rotating friends behind the Serial Pals conversation.'), component: PalsPage });
