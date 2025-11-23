import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    cover_image: string;
    short_description: string;
    content: string;
    author: string;
    published_at: string;
    seo_title?: string;
    seo_description?: string;
    keywords?: string[];
    canonical_url?: string;
};
