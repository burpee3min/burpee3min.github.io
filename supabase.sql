-- Supabase SQL Editor에 통째로 붙여넣고 Run. 랭킹 테이블 + 규칙 + 기존 기록 2개.
create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  mode text not null check (mode in ('solo', 'team')),
  size int not null,
  name text not null check (char_length(btrim(name)) between 1 and 20),
  count int not null,
  at timestamptz not null default now(),
  check ((mode = 'solo' and size = 1) or (mode = 'team' and size between 2 and 6)),
  -- 3분에 1인당 120개는 세계기록 수준
  check (count between 0 and 120 * size)
);
create index if not exists scores_rank on public.scores (mode, count desc, at);

-- 누구나 읽기·새 기록 추가만 가능. 수정·삭제 불가, id·시간은 서버가 정함.
alter table public.scores enable row level security;
drop policy if exists "read all" on public.scores;
drop policy if exists "insert only" on public.scores;
create policy "read all" on public.scores for select to anon using (true);
create policy "insert only" on public.scores for insert to anon with check (true);
revoke all on public.scores from anon, authenticated;
grant select on public.scores to anon;
grant insert (mode, size, name, count) on public.scores to anon;

-- 로컬에서 등록했던 기록 옮기기
insert into public.scores (mode, size, name, count, at) values
  ('solo', 1, '미친 자', 12, to_timestamp(1792039509893 / 1000.0)),
  ('solo', 1, '미친 주', 9, to_timestamp(1792039405036 / 1000.0));
