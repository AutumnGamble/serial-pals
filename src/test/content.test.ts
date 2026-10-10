import {describe,it,expect} from 'vitest';
import {categories,getPosts,posts} from '@/data/content';
describe('Serial Pals static feed',()=>{
 it('contains at least six stories spanning the six requested categories',()=>{expect(posts.length).toBeGreaterThanOrEqual(6);expect(new Set(posts.map(p=>p.category))).toEqual(new Set(categories.slice(1)));});
 it('filters by the selected category without returning unrelated files',()=>{expect(getPosts('Unsolved').map(p=>p.id)).toEqual(['last-turn']);});
 it('returns newest stories first',()=>{expect(getPosts().map(p=>p.date)).toEqual(['2026-10-09','2026-10-08','2026-10-06','2026-10-04','2026-10-02','2026-09-29']);});
 it('searches file locations case-insensitively',()=>{expect(getPosts('All files','OREGON').map(p=>p.id)).toEqual(['hollow-creek']);});
 it('combines search and category filters',()=>{expect(getPosts('Horror','Oregon')).toEqual([]);});
});
