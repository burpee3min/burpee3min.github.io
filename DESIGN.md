---
name: 버피 3분 챌린지
description: The gym's wall-mounted LED interval clock, counting your burpees.
colors:
  led: "#ff2a1a"
  led-dim: "rgba(255,42,26,.09)"
  push-red: "#b01206"
  push-red-hover: "#c3160a"
  push-red-pressed: "#e01e0e"
  rubber-floor: "#131313"
  case-black: "#080808"
  panel-black: "#0c0404"
  key-cap: "#1b1b1b"
  key-cap-hover: "#222222"
  key-cap-lit: "#160606"
  indicator-off: "#2a0b09"
  chalk: "#f2eee6"
  case-print: "#c9c2b6"
  worn-print: "#a9a296"
  placeholder: "#8a837a"
typography:
  display:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(64px, 21vw, 124px)"
    fontWeight: 700
    lineHeight: 1
  huge:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(88px, 28vw, 152px)"
    fontWeight: 700
    lineHeight: 1
  rank-big:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(64px, 20vw, 104px)"
    fontWeight: 700
    lineHeight: 1
  mid:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(44px, 14vw, 72px)"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(40px, 12vw, 64px)"
    fontWeight: 700
    lineHeight: 1
  member:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(48px, 14vw, 72px)"
    fontWeight: 700
    lineHeight: 1
  time-s:
    fontFamily: "DSEG7, monospace"
    fontSize: "clamp(28px, 8vw, 40px)"
    fontWeight: 700
    lineHeight: 1
  status:
    fontFamily: "DSEG14, monospace"
    fontSize: "clamp(20px, 6vw, 32px)"
    fontWeight: 700
    lineHeight: 1
  key-digit:
    fontFamily: "DSEG7, monospace"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1
  led-row:
    fontFamily: "DSEG7, monospace"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "clamp(20px, 5.4vw, 28px)"
    fontWeight: 900
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "clamp(17px, 4.4vw, 20px)"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  note:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  section:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    letterSpacing: "0.06em"
  label:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.2em"
  button:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    letterSpacing: "0.06em"
  key:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 700
rounded:
  indicator: "50%"
  msg: "8px"
  panel: "12px"
  button: "16px"
  case: "24px"
  screw: "50%"
spacing:
  u: "8px"
  u2: "16px"
  u3: "24px"
  u4: "32px"
  u5: "40px"
components:
  button-start:
    backgroundColor: "{colors.push-red}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "20px 0"
    width: "100%"
  button-start-hover:
    backgroundColor: "{colors.push-red-hover}"
  button-start-pressed:
    backgroundColor: "{colors.push-red-pressed}"
  button-key:
    backgroundColor: "{colors.key-cap}"
    textColor: "{colors.chalk}"
    typography: "{typography.key}"
    rounded: "{rounded.panel}"
    padding: "24px 8px 12px"
    height: "64px"
  button-key-hover:
    backgroundColor: "{colors.key-cap-hover}"
  button-key-pressed:
    backgroundColor: "{colors.key-cap-lit}"
    textColor: "{colors.led}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.worn-print}"
    padding: "16px"
  clock-case:
    backgroundColor: "{colors.case-black}"
    rounded: "{rounded.case}"
    padding: "16px"
  clock-panel:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.led}"
    rounded: "{rounded.panel}"
    padding: "16px 16px 20px"
  play-hud:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.led}"
    rounded: "{rounded.panel}"
    padding: "12px 16px 16px"
  led-rows:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
  input-name:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.panel}"
    padding: "16px"
    width: "100%"
---

# Design System: 버피 3분 챌린지

## Overview

> Note (2026-10-23): the ranking was removed (intro TOP 3, ranking screen, name entry, RANK panel, rank on the share card). Their sections below describe retired parts; the LED Rows component lives on only as the team breakdown on the result screen.

**Creative North Star: "The Wall-Mounted Interval Clock"**

The product is the clock on the gym wall, not a page about a workout app. A matte black acrylic case hangs on a charcoal rubber floor; inside it, red seven-segment digits glow over their own dim unlit segments. Everything the visitor needs to know is either printed on the case in small white-grey caps or lit on the display. Settings are the timer's own hardware keys with indicator LEDs, and each screen has exactly one physical red push button.

Hierarchy comes from digit size alone: the biggest number on each screen is what that screen is about (the time on the intro, the reps during play and on the result, the rank once a score is registered); status is smaller, leaderboard rows are smallest and all identical. States (WAIT, READY, HOLD, SET 3, GO, STOP, TIME) are lit on the display, never drawn as badges. The world is dark, dense, and quiet except for the LED red, which is the only hue.

Every screen of `public/index.html` (intro, setup, play, result, ranking) and the 1080×1920 share card drawn by `public/card.js` are built in this world.

**Key Characteristics:**
- One hue: LED red on near-black. Warm off-white only for print and body copy.
- Seven- and fourteen-segment digits with ghost segments behind every lit readout.
- An 8px LED dot grid inside every display panel; all spacing in multiples of 8px.
- Physical objects: a bevelled case with screws, recessed panels, hardware keys with indicator dots, a push button that travels 2px.
- States printed on the display, rankings as same-size LED rows.

## Colors

A single-signal palette: one red that glows, a family of near-blacks that hold it, and warm greys that read as paint printed on plastic.

### Primary
- **Signal Red** (led): every lit segment, the 8px dot grid tint, lit indicator dots on keys and on "me" rows, focus rings, selection, the emphasis inside the hook line, the how-to pictograms and the pressed key icon.
- **Unlit Segment** (led-dim): ghost `8:88` / `888` / `88` / `~~~~~` behind every readout so the display looks like real hardware.
- **Push-Button Red** (push-red, push-red-hover, push-red-pressed): the one red push button per screen. Darker than the LED at rest, brightening on hover and when pressed, so the button reads as a lit physical cap rather than a second LED.

### Neutral
- **Rubber Floor** (rubber-floor): page ground, overlaid with a fine two-layer grain (white 7px and red 13px specks). Also the share card ground.
- **Case Black** (case-black): the clock body, top-lit with a gradient from `#161616`.
- **Panel Black** (panel-black): red-tinted black behind the digits, the HUD, the leaderboard rows and the name input.
- **Key Cap** (key-cap, key-cap-hover): unpressed hardware keys; the hover grey is also the screw head.
- **Lit Key** (key-cap-lit): a pressed key, a red-black that sits lower than its neighbours.
- **Indicator Off** (indicator-off): the dark red dot on an unpressed key, so the off LED is still visible as hardware.
- **Chalk** (chalk): body text, the case title, member names.
- **Case Print** (case-print): small-caps labels on the case (STATUS, REPS, TIME, MODE, RANK), section headings, digits printed on unpressed keys, the result tag.
- **Worn Print** (worn-print): secondary links, notes, empty-state copy, key sub-labels.
- **Placeholder** (placeholder): input placeholder text; dimmer than Worn Print so typed text always wins.

### Named Rules
**The One Signal Rule.** Red is light. It appears where something is lit or pressed, never as decoration, and no second accent hue exists.

**The Ghost Segment Rule.** Every LED readout renders its full unlit pattern behind the lit value, so numbers never jump in width and the display reads as hardware.

**The Print-Until-Pressed Rule.** A key's digits are case print until the key is pressed; only then do they light as LED segments with their ghost behind.

## Typography

**Display Font:** DSEG7 Classic Bold (self-hosted, OFL), with monospace fallback
**Status Font:** DSEG14 Classic Bold (self-hosted, OFL) for lettered states
**Body Font:** Pretendard Variable (jsdelivr), with -apple-system, sans-serif. The share card uses the same stack.

**Character:** Segment digits do all the shouting; Pretendard is the paint on the case, heavy and compact for the title and button, plain for instructions.

### Hierarchy
- **Huge** (DSEG7, clamp(88px, 28vw, 152px)): REPS during solo play and on the result. The largest number in the system.
- **Display** (DSEG7, clamp(64px, 21vw, 124px)): the intro clock time.
- **Rank Big** (DSEG7, clamp(64px, 20vw, 104px)): your rank after registering; shown unpadded (`7`, not `007`).
- **Mid** (DSEG7, clamp(44px, 14vw, 72px)): secondary readouts. Setup's TIME narrows it to clamp(40px, 12vw, 60px); the rank panel's total to clamp(32px, 9vw, 48px).
- **Member** (DSEG7, clamp(48px, 14vw, 72px)): per-person two-digit counts during team play.
- **Headline** (DSEG7, clamp(40px, 12vw, 64px)): intro REPS.
- **Time Small** (DSEG7, clamp(28px, 8vw, 40px)): the play TIME, deliberately small so reps dominate while moving.
- **Status** (DSEG14, clamp(20px, 6vw, 32px)): WAIT / READY / HOLD / SET n / GO / STOP / TIME, and the setup MODE (SOLO / TEAM). 20px in the result case corner.
- **Key Digit** (DSEG7, 24px): numbers on setup keys.
- **LED Row** (DSEG7, 22px): rank and count in every row list; every row the same size.
- **Title** (Pretendard 900, clamp(20px, 5.4vw, 28px), -0.02em): the name printed on the case top.
- **Lead** (Pretendard 700, clamp(17px, 4.4vw, 20px), 1.5, balanced wrap): the one-sentence hook under the intro clock.
- **Body** (Pretendard 400, 16px, 1.5): how-to steps. Korean text uses `word-break: keep-all` on every screen.
- **Note** (Pretendard 400, 15px, 1.6, worn-print): rules under a choice (official vs practice, team rules).
- **Section** (Pretendard 800, 14px, 0.06em, case-print): section headings and form labels.
- **Label** (Pretendard 700, 11px, 0.2em, uppercase Latin): case print next to a readout.
- **Button** (Pretendard 900, 22px, 0.06em): the red push button.
- **Key** (Pretendard 700, 16px): key labels; sub-labels 13px worn-print.

### Named Rules
**The Size-Only Rule.** Inside the display, rank is expressed only by digit size. Never by color, weight, or a badge.

**The Subject-Is-Biggest Rule.** On each screen the number the person came for is the largest readout: time on the intro, reps during play and on the result, rank once registered.

## Layout

Single centred column: 640px max on small screens, 560px from 700px wide up, with a 16px gutter. All spacing is built from the 8px unit (`--u`): 8, 12, 16, 20, 24, 32, 40px. Display panels carry a visible 8px dot grid (`radial-gradient` at `var(--u) var(--u)`). Readouts sit in rows with the label printed above the digits, bottom-aligned.

- **Intro:** clock case filling the column, hook, START, ranking link, top-3 rows, how-to steps.
- **Setup:** a small display case (title, screws, TIME + MODE readout) shows what is selected, then rows of keys (mode, team size in five equal columns, time) with notes. START sits in a sticky action bar at the bottom of the viewport, fading the floor up behind it, so it is always reachable without scrolling.
- **Play:** the camera stage is at most `min(44vh, (100vw - 32px) * 4/3)` tall at 3:4 so the whole body stays visible and uncovered; only a compact message strip sits on the video. All readouts live in an opaque HUD panel below the stage (TIME + STATUS on top, REPS huge below). In team mode REPS is replaced by a three-column grid of per-member two-digit readouts; the team total appears only on the result. A full-width key stops the run.
- **Result:** result case (printed title and screws, REPS label with TIME status in the corner, reps huge), the mode tag, the team breakdown rows, the name form or the practice note, the RANK panel after registering, the share-card preview (62% width, max 280px) with its share key, then the ranking key and the again link.
- **Ranking:** a solo/team key pair, the official board as LED rows, a home link.

## Elevation & Depth

Depth is physical, not material-design layering. The case is lifted off the floor; displays, rows and the name field are sunk into it; keys and the push button sit proud and travel when pressed. Light is the LED glow, not shadows.

### Shadow Vocabulary
- **Case lift** (`0 2px 0 rgba(255,255,255,.06) inset, 0 24px 48px rgba(0,0,0,.6), 0 4px 10px rgba(0,0,0,.5)`): the clock body; the card preview uses the outer two layers.
- **Panel recess** (`0 0 0 1px #000 inset, 0 6px 18px rgba(0,0,0,.9) inset`): display windows and the HUD; row lists use `0 4px 14px` at .8, the input `0 4px 12px` at .8.
- **Stage** (`0 0 0 1px #000, 0 20px 40px rgba(0,0,0,.6)`): the camera window.
- **Key proud** (`0 1px 0 rgba(255,255,255,.05) inset, 0 6px 14px rgba(0,0,0,.5), 0 2px 4px rgba(0,0,0,.5)`): keys at rest; pressed keys drop 1px with a faint red inner rim (`0 0 0 1px rgba(255,42,26,.35) inset, 0 2px 6px rgba(0,0,0,.6)`).
- **Button proud** (`0 10px 24px rgba(0,0,0,.5), 0 3px 8px rgba(0,0,0,.5)`): push button at rest; pressed collapses to `0 4px 10px` plus a red inner rim.
- **LED glow** (`0 0 6px rgba(255,42,26,.55), 0 0 22px rgba(255,42,26,.28)` as text-shadow): every lit segment; indicator dots use `0 0 6px rgba(255,42,26,.8)`.

### Named Rules
**The Hardware Depth Rule.** Shadows describe a real object (case, recess, key, button, stage). No floating cards.

## Shapes

Softly rounded hardware: case 24px, push button, stage and row lists 16px, display windows, keys, input and card preview 12px, the on-video message strip 8px. Round 10px screws at the case top corners; round 6px indicator dots on keys, 8px on "me" rows. Rows inside a panel are divided by 1px lines in faint red (`rgba(255,42,26,.12)`), not by separate boxes.

## Components

### Buttons
- **Red push button:** full width, push-red, 16px radius, 20px vertical padding, white Button type. Hover brightens; press (and the `.pressed` state set on tap) moves it down 2px, brightens to push-red-pressed and adds a red inner rim. Transitions 120ms `cubic-bezier(.16,1,.3,1)`.
- **Key:** key-cap, 12px radius, 64px min height, chalk Key type, proud shadow; hover lightens, press drops 2px. Used for STOP, share (before registering), ranking and the ranking mode toggle.
- **Link button:** no fill, worn-print text, underlined with a 5px offset; hover goes to chalk. 전체 랭킹 보기, 처음으로, 다시 하기.
- **Focus:** 2px Signal Red outline, 3px offset, everywhere.

**The One Red Button Rule.** Each screen has exactly one push-red button. On the result it is 랭킹 등록 while the score can still be saved; once saved, or for a practice or stopped run, the share button becomes the red one and everything else is a key or link.

### Indicator Keys (setup)
Keys in an auto-fit grid (min 88px; team size is five equal columns), 24px top padding to make room for a 6px indicator dot centred at the top. Unpressed: indicator-off dot, digits and icon in case print, no ghost. Pressed (`aria-pressed="true"`): key-cap-lit, red inner rim, dropped 1px, dot lit red with glow, digits lit as LED over their ghost, icon red. Icons are 28px inline SVG line drawings.

### Clock (signature)
Case with a printed title between two screws, then a recessed panel holding the readouts with case-print labels. Intro: time, STATUS and REPS, a DEMO label in the panel corner while the attract loop runs. Setup: TIME and MODE only. Result: REPS label with a lit TIME status in the corner and the count huge, centred.

**Attract loop:** time counts down from 3:00 each second, reps tick up every third second, status shows GO then TIME. Pressing START resets to 3:00 / 000, lights GO, holds the pressed button for 450ms, then moves on. With `prefers-reduced-motion`, the demo and flashes stop.

**Rep tick:** every live count (demo reps, play REPS, each member readout) restarts a 500ms brightness flash with extra glow on change.

### Play HUD
Opaque dot-grid panel under the camera stage. Top row: TIME (Time Small) left, STATUS (DSEG14) right. Below: REPS huge centred for solo, or a three-column member grid (case-print `1번` label above a two-digit Member readout) for teams. The only thing on the video is the message strip: case-black at .86 opacity, 8px radius, 15px/700 chalk text.

### Rank Panel
After registering, a small display shows RANK (or TEAM RANK) in Rank Big, unpadded, and PLAYERS (or TEAMS) as a smaller Mid readout of the total.

### LED Rows
One shared list for the intro top-3, the full ranking and the team breakdown on the result. Recessed panel with the dot grid; each row is rank digits, name (Pretendard 700, 17px, ellipsis, optional 14px worn-print size suffix) and count, digits at LED Row size. Your own entry is marked by a lit 8px indicator dot before the name, not by color or weight. Loading and empty states are plain worn-print text inside the panel.

### Inputs / Fields
- **Style:** recessed panel-black field, 12px radius, 16px padding, chalk 17px/700 text, no border; placeholder in Placeholder grey. Labelled by a Section heading above.
- **Focus:** the global 2px red outline; the caret is red.

### How-to Steps
Three rows: a 48px line pictogram in Signal Red (2.4 stroke, round caps) and one sentence of body text.

### Share Card (`public/card.js`, 1080×1920 PNG)
- **Ground:** rubber-floor fill. The start-pose photo covers and is clipped to the top 1220px, with a 280px top darkening (rubber-floor at .7 to 0) so the title reads, and a 520px bottom fade into the floor.
- **Title:** 버피 3분 챌린지, Pretendard 900 60px chalk at top left (72, 132).
- **Case:** case-black, 56px radius, drop shadow, inset 36px to a panel-black window with 32px radius and a dotted grid (2px dots every 18px, the 8px grid at card scale).
- **Readouts:** REPS printed top left (30px case print); a DSEG14 TIME status top right at 44px over its ghost; the count as three DSEG7 digits at 300px over `888`, centred by measured width, with red glow.
- **Bottom of the window:** the mode tag left (36px case print). The rank cluster is laid out right to left by measured widths: `/ 57명` (or 팀) in 36px chalk, the rank digits at 64px DSEG7 over a ghost, then `개인 랭킹` / `팀 랭킹` in 30px case print.
- **Sub line:** team name or member list centred in 800 chalk at 40px; if it does not fit 936px it splits at ` · ` into two lines, shrinking to 32px, and ellipsizes if still too long.
- **Date:** ko-KR date, 600 30px worn-print, centred at the bottom.

## Do's and Don'ts

### Do:
- **Do** render every number as a segment readout with its ghost pattern behind it.
- **Do** print states on the display (WAIT, READY, HOLD, SET n, GO, STOP, TIME) in DSEG14.
- **Do** keep leaderboard rows identical in size; rank lives in the digit, "me" lives in the indicator dot.
- **Do** build spacing from the 8px unit and put the dot grid inside display panels.
- **Do** keep exactly one push-red button on each screen; everything else is a key or a link.
- **Do** keep the camera stage clear for the full body and put readouts in the panel below it.
- **Do** show per-person counts during team play and the team total only on the result.
- **Do** stop the demo motion and the rep tick under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second accent hue.
- **Don't** show states as badges or pills.
- **Don't** use emoji as icons or labels; pictograms are inline SVG line drawings.
- **Don't** cover the player with readouts on the video; only the message strip sits there.
- **Don't** show invented counts, users, or records; only real ranking entries appear on a display.
