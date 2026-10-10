import {createFileRoute, notFound} from '@tanstack/react-router';
import {ArticlePage} from '@/components/serial/pages';
import {posts,pageHead} from '@/data/content';
export const Route = createFileRoute('/files/$slug')({loader:({params})=>{const post=posts.find(p=>p.id===params.slug);if(!post)throw notFound();return post;},head:({loaderData})=>pageHead(loaderData?.title||'File not found',loaderData?.excerpt||'This file could not be found.'),component: CaseArticle});
function CaseArticle(){const {slug}=Route.useParams();return <ArticlePage slug={slug}/>;}
