export interface Service {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  icon: string | null;
  created_at: string;
}

export interface Market {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  created_at: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  credentials: string[] | null;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  author_id: string | null;
  category: string | null;
  published_at: string | null;
  created_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string | null;
  disclaimer_accepted: boolean;
  created_at: string;
}
