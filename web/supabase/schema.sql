-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Services Table
create table services (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text,
  icon text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Markets Table
create table markets (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Attorneys Table
create table attorneys (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  role text not null,
  bio text,
  photo_url text,
  credentials jsonb, -- Array of strings or objects
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Posts Table
create table posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text,
  author_id uuid references attorneys(id),
  category text,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Inquiries Table
create table inquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  message text,
  disclaimer_accepted boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
alter table services enable row level security;
create policy "Public services are viewable by everyone." on services for select using (true);

alter table markets enable row level security;
create policy "Public markets are viewable by everyone." on markets for select using (true);

alter table attorneys enable row level security;
create policy "Public attorneys are viewable by everyone." on attorneys for select using (true);

alter table posts enable row level security;
create policy "Public posts are viewable by everyone." on posts for select using (true);

alter table inquiries enable row level security;
create policy "Anyone can insert inquiries." on inquiries for insert with check (true);
