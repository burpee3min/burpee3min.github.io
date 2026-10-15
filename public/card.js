// 인스타 스토리 크기(1080x1920) 인증 사진: 위는 내 사진, 아래는 LED 시계 케이스에 찍힌 기록
// photo: 캔버스(시작 자세 사진) 또는 null, rank: { rank, total, team } 또는 null
const LED = '#ff2a1a', DIM = 'rgba(255,42,26,.09)', CHALK = '#f2eee6', PRINT = '#c9c2b6', MUTED = '#a9a296';
const SANS = '"Pretendard Variable", Pretendard, -apple-system, sans-serif';

export async function makeCard({ photo, count, tag, rank, sub }) {
  // 페이지에 선언된 LED 글꼴이 실제로 로드된 뒤에 그려야 함
  await Promise.all(['700 100px DSEG7', '700 100px DSEG14', `900 60px ${SANS}`].map(f => document.fonts.load(f).catch(() => {})));

  const W = 1080, H = 1920, PH = 1220;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#131313'; g.fillRect(0, 0, W, H);

  if (photo) {
    const s = Math.max(W / photo.width, PH / photo.height);
    g.save(); g.beginPath(); g.rect(0, 0, W, PH); g.clip(); // 사진이 아래 영역으로 넘치지 않게
    g.drawImage(photo, (W - photo.width * s) / 2, (PH - photo.height * s) / 2, photo.width * s, photo.height * s);
    g.restore();
    // 밝은 사진에서도 제목이 읽히게 위쪽을 살짝 어둡게
    const top = g.createLinearGradient(0, 0, 0, 280);
    top.addColorStop(0, 'rgba(19,19,19,.7)'); top.addColorStop(1, 'rgba(19,19,19,0)');
    g.fillStyle = top; g.fillRect(0, 0, W, 280);
  }
  const fade = g.createLinearGradient(0, PH - 520, 0, PH);
  fade.addColorStop(0, 'rgba(19,19,19,0)'); fade.addColorStop(1, '#131313');
  g.fillStyle = fade; g.fillRect(0, PH - 520, W, 520);

  const text = (t, x, y, font, color, align = 'left', glow = false) => {
    g.font = font; g.textAlign = align; g.fillStyle = color;
    g.shadowColor = glow ? 'rgba(255,42,26,.6)' : 'rgba(0,0,0,.6)'; g.shadowBlur = glow ? 28 : 14;
    g.fillText(t, x, y);
    g.shadowBlur = 0;
  };
  // LED 숫자: 꺼진 칸 위에 켜진 값을 오른쪽 정렬로
  const led = (ghost, val, xRight, y, size, face = 'DSEG7') => {
    text(ghost, xRight, y, `700 ${size}px ${face}`, DIM, 'right');
    text(val, xRight, y, `700 ${size}px ${face}`, LED, 'right', true);
  };
  const round = (x, y, w, h, r, fill, shadow) => {
    g.beginPath(); g.roundRect(x, y, w, h, r);
    if (shadow) { g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 60; g.shadowOffsetY = 30; }
    g.fillStyle = fill; g.fill();
    g.shadowBlur = 0; g.shadowOffsetY = 0;
  };

  text('버피 3분 챌린지', 72, 132, `900 60px ${SANS}`, CHALK);

  // 시계 케이스와 안쪽 표시창(8px 점 격자를 1080 기준 18px로)
  const cx = 60, cy = 1060, cw = W - 120, ch = 640;
  round(cx, cy, cw, ch, 56, '#080808', true);
  const px = cx + 36, py = cy + 36, pw = cw - 72, phh = ch - 72;
  round(px, py, pw, phh, 32, '#0c0404');
  g.save(); g.beginPath(); g.roundRect(px, py, pw, phh, 32); g.clip();
  g.fillStyle = 'rgba(255,42,26,.07)';
  for (let y = py + 9; y < py + phh; y += 18) for (let x = px + 9; x < px + pw; x += 18) g.fillRect(x, y, 2, 2);
  g.restore();

  text('REPS', px + 48, py + 72, `700 30px ${SANS}`, PRINT);
  led('~~~~', 'TIME', px + pw - 48, py + 84, 44, 'DSEG14');
  g.font = '700 300px DSEG7';
  led('888', String(count).padStart(3, '0'), W / 2 + g.measureText('888').width / 2, py + 400, 300);

  // 표시창 아래: 모드 · 시간, 등수
  text(tag, px + 48, py + phh - 56, `700 36px ${SANS}`, PRINT);
  if (rank) {
    // 오른쪽 끝부터 너비를 재서 배치: "/ 57명" ← 등수 LED ← "개인 랭킹"
    let x = px + pw - 48;
    const of = `/ ${rank.total}${rank.team ? '팀' : '명'}`;
    text(of, x, py + phh - 56, `800 36px ${SANS}`, CHALK, 'right');
    g.font = `800 36px ${SANS}`; x -= g.measureText(of).width + 16;
    led('888', String(rank.rank), x, py + phh - 48, 64);
    g.font = '700 64px DSEG7'; x -= g.measureText('888').width + 20;
    text(`${rank.team ? '팀' : '개인'} 랭킹`, x, py + phh - 56, `700 30px ${SANS}`, PRINT, 'right');
  }

  if (sub) {
    // 긴 팀 이름·팀원 목록: 한 줄에 안 들어가면 ' · ' 기준으로 두 줄(32px까지 줄임), 그래도 넘치면 말줄임
    const max = W - 144, fits = (t, size) => { g.font = `800 ${size}px ${SANS}`; return g.measureText(t).width <= max; };
    const clip = (t, size) => { while (!fits(t, size) && t.length > 1) t = t.slice(0, -2) + '…'; return t; };
    if (fits(sub, 40)) text(sub, W / 2, 1790, `800 40px ${SANS}`, CHALK, 'center');
    else {
      const [a, ...rest] = sub.split(' · '), b = rest.join(' · ');
      let size = 40; while (size > 32 && !(fits(a, size) && fits(b, size))) size -= 2;
      text(clip(a, size), W / 2, b ? 1760 : 1790, `800 ${size}px ${SANS}`, CHALK, 'center');
      if (b) text(clip(b, size), W / 2, 1760 + size + 10, `800 ${size}px ${SANS}`, CHALK, 'center');
    }
  }
  text(new Date().toLocaleDateString('ko-KR'), W / 2, 1880, `600 30px ${SANS}`, MUTED, 'center');

  return new Promise(r => c.toBlob(r, 'image/png'));
}
