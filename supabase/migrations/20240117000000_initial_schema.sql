-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Services Table
create table services (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  title text not null,
  description text,
  business_problem text,
  approach text,
  tools text[],
  value_prop text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Industries Table
create table industries (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  name text not null,
  overview text,
  challenges text,
  solutions text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Leads Table
create table leads (
  id uuid default uuid_generate_v4() primary key,
  name text,
  email text,
  phone text,
  company text,
  message text,
  source text, -- 'contact_form', 'popup'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Case Studies Table
create table case_studies (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  title text not null,
  client text,
  summary text,
  content text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
alter table services enable row level security;
create policy "Public services are viewable by everyone" on services for select using (true);
create policy "Enable read access for all users" on services for select using (true);

alter table industries enable row level security;
create policy "Public industries are viewable by everyone" on industries for select using (true);

alter table leads enable row level security;
create policy "Anyone can insert leads" on leads for insert with check (true);

alter table case_studies enable row level security;
create policy "Public case studies are viewable by everyone" on case_studies for select using (true);
