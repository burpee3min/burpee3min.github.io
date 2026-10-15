import assert from 'node:assert';
import { createCounter } from './public/counter.js';

const c = createCounter(0.1, 0.9);
// 서 있음 → 내려감 → 일어남 = 1개
for (const y of [0.1, 0.3, 0.7, 0.8, 0.6, 0.3, 0.15]) c.update(y);
assert.equal(c.count, 1);
// 반쯤만 앉았다 일어나면 카운트 안 됨
for (const y of [0.4, 0.5, 0.2]) c.update(y);
assert.equal(c.count, 1);
// 바닥에 내려가도 안 일어나면 카운트 안 됨, 머리 놓침(null)은 무시
for (const y of [0.8, null, 0.85, 0.5]) c.update(y);
assert.equal(c.count, 1);
c.update(0.12);
assert.equal(c.count, 2);
// 반칙 중(allow=false)에 일어난 건 안 셈
for (const y of [0.8, 0.12]) c.update(y, false);
assert.equal(c.count, 2);
// 내려가 있는 동안 잠깐이라도 반칙이면, 일어날 땐 괜찮아도 안 셈
c.update(0.8); c.update(0.7, false); c.update(0.12);
assert.equal(c.count, 2);
// 배 아래로 머리 = low
const b = createCounter(0.1, 0.9, 0.5);
b.update(0.55); assert.equal(b.low, true);
b.update(0.3); assert.equal(b.low, false);
console.log('ok');

import { isArmsO, assignLanes } from './public/counter.js';
// 사람 포즈 만들기: 코 0.3, 어깨 0.4(x 0.45/0.55)
const pose = (elbowY, wristL, wristR) => {
  const lm = Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.5, visibility: 1 }));
  lm[0] = { x: 0.5, y: 0.3, visibility: 1 };
  lm[11] = { x: 0.55, y: 0.4, visibility: 1 }; lm[12] = { x: 0.45, y: 0.4, visibility: 1 };
  lm[13] = { x: 0.6, y: elbowY, visibility: 1 }; lm[14] = { x: 0.4, y: elbowY, visibility: 1 };
  lm[15] = { ...wristL, visibility: 1 }; lm[16] = { ...wristR, visibility: 1 };
  return lm;
};
// ⭕: 팔꿈치 들고 손목이 머리 위에서 모임
assert.equal(isArmsO(pose(0.3, { x: 0.51, y: 0.15 }, { x: 0.49, y: 0.15 })), true);
// 만세(손목 벌어짐)
assert.equal(isArmsO(pose(0.3, { x: 0.65, y: 0.15 }, { x: 0.35, y: 0.15 })), false);
// 팔 내림
assert.equal(isArmsO(pose(0.55, { x: 0.51, y: 0.6 }, { x: 0.49, y: 0.6 })), false);
// 손이 안 보이면 false
const hidden = pose(0.3, { x: 0.51, y: 0.15 }, { x: 0.49, y: 0.15 }); hidden[15].visibility = 0.1;
assert.equal(isArmsO(hidden), false);
// 레인 짝짓기: 한 명이 안 보이면 -1
assert.deepEqual(assignLanes([0.2, 0.5, 0.8], [0.82, 0.21]), [1, -1, 0]);
console.log('ok2');
