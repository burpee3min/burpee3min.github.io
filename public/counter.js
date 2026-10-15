// 버피 카운트 상태 머신. y는 화면 위=0, 아래=1 (MediaPipe 정규화 좌표).
// headY0: 서 있을 때 머리 높이, footY0: 발 높이, bellyY0: 서 있을 때 배 높이 (준비 단계에서 측정)
export function createCounter(headY0, footY0, bellyY0 = (headY0 + footY0) / 2) {
  const H = footY0 - headY0;
  const downLine = footY0 - 0.35 * H; // 머리가 이 선보다 아래면 "바닥 근처"
  const upLine = headY0 + 0.25 * H;   // 머리가 이 선보다 위면 "일어섬"
  let down = false, ok = true, low = false;
  let count = 0;
  return {
    // 내려가서 일어날 때까지 한 번이라도 allow=false면 그 1개는 안 셈 (팀원 이탈·동시에 머리 내림 등)
    update(headY, allow = true) {
      if (down && !allow) ok = false;
      if (headY == null) return count;
      low = headY > bellyY0;
      if (!down && headY > downLine) { down = true; ok = allow; }
      else if (down && headY < upLine) { down = false; if (ok && allow) count++; }
      return count;
    },
    get count() { return count; },
    get down() { return down; },
    get low() { return low; }, // 머리가 처음 선 자세의 배보다 아래 (앉기·쪼그리기·버피 중)
  };
}

// 두 팔로 머리 위 ⭕ 자세: 두 손목이 머리(코)보다 위, 팔꿈치가 어깨보다 위, 두 손목이 어깨너비보다 가깝게 모임
// (만세처럼 팔을 벌리면 손목 사이가 넓어서 안 됨)
export function isArmsO(lm) {
  if (![0, 11, 12, 13, 14, 15, 16].every(i => lm[i].visibility > 0.5)) return false;
  const shoulderW = Math.abs(lm[11].x - lm[12].x);
  return lm[15].y < lm[0].y && lm[16].y < lm[0].y
    && lm[13].y < lm[11].y && lm[14].y < lm[12].y
    && Math.hypot(lm[15].x - lm[16].x, lm[15].y - lm[16].y) < 0.8 * shoulderW;
}

// 팀 모드: 사람(레인)마다 직전 x 위치에 가장 가까운 포즈를 짝지음. 반환: 레인별 포즈 번호(없으면 -1)
export function assignLanes(laneXs, poseXs) {
  const pairs = [];
  laneXs.forEach((lx, l) => poseXs.forEach((px, p) => pairs.push([Math.abs(lx - px), l, p])));
  pairs.sort((a, b) => a[0] - b[0]);
  const out = laneXs.map(() => -1), used = new Set();
  for (const [, l, p] of pairs) if (out[l] === -1 && !used.has(p)) { out[l] = p; used.add(p); }
  return out;
}
