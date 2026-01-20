// Admin-related TypeScript types

export interface AdminUser {
    id: string;
    auth_user_id: string;
    email: string;
    full_name: string;
    role: 'admin' | 'super_admin';
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface AdminSession {
    user: AdminUser;
    accessToken: string;
    expiresAt: number;
}

export interface ContactSubmission {
    id: string;
    first_name: string;
    last_name: string;
    email: string | null;
    phone: string | null;
    message: string;
    service_type: string | null;
    status: string;
    created_at: string;
}

export interface Blog {
    id: string;
    title: string;
    slug: string;
    cover_image: string;
    short_description: string;
    content: string;
    author: string;
    published_at: string;
    is_published: boolean;
    seo_title: string | null;
    seo_description: string | null;
    keywords: string[] | null;
    canonical_url: string | null;
    created_at: string;
    updated_at: string;
}

export interface DashboardStats {
    totalBlogs: number;
    publishedBlogs: number;
    draftBlogs: number;
    totalContacts: number;
    newContacts: number;
    readContacts: number;
}
