// 랭킹 저장소: Supabase(무료 DB)의 scores 테이블을 REST로 직접 읽고 씀.
// 공개 키(publishable)는 브라우저에 노출돼도 되는 키. 쓰기 규칙(이름 길이, 개수 범위, 수정·삭제 금지)은 DB 쪽 supabase.sql에서 강제함.
const URL_ = 'https://xpcahdbgyjxfurkxfazn.supabase.co';
const KEY = 'sb_publishable__8XqO9Eu-Ci0beyvlfoFOw_VjzLQwHK';

const api = (path, init = {}) => fetch(`${URL_}/rest/v1/${path}`, {
  ...init,
  headers: { apikey: KEY, 'Content-Type': 'application/json', ...init.headers },
});

// 조건에 맞는 행 개수 (Content-Range: 0-0/57 의 뒤 숫자)
async function countWhere(query) {
  const res = await api(`scores?select=id&${query}`, { headers: { Prefer: 'count=exact', Range: '0-0' } });
  if (!res.ok) throw new Error('count ' + res.status);
  return +res.headers.get('content-range').split('/')[1];
}

export async function getScores(mode, limit = 50) {
  const res = await api(`scores?select=id,mode,size,name,count&mode=eq.${mode}&order=count.desc,at.asc&limit=${limit}`);
  if (!res.ok) throw new Error('list ' + res.status);
  return res.json();
}

// 저장 후 { id, rank, total } 반환. 같은 개수면 먼저 올린 사람이 위.
export async function saveScore({ mode, size, name, count }) {
  const res = await api('scores?select=id,at', { method: 'POST', headers: { Prefer: 'return=representation' }, body: JSON.stringify({ mode, size, name, count }) });
  if (!res.ok) throw new Error('save ' + res.status);
  const [row] = await res.json();
  const at = encodeURIComponent(row.at);
  const [ahead, total] = await Promise.all([
    countWhere(`mode=eq.${mode}&or=(count.gt.${count},and(count.eq.${count},at.lt.${at}))`),
    countWhere(`mode=eq.${mode}`),
  ]);
  return { id: row.id, rank: ahead + 1, total };
}
