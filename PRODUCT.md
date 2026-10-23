# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Anyone with a phone or laptop camera: gym and CrossFit members, people working out at home alone or with friends and family, and groups running company, club, or school events as team contests. Mostly used on a phone propped on the floor, with the user standing a few meters away.

## Product Purpose
A camera-based burpee counter. The official challenge is 3 minutes; 1- and 2-minute practice runs exist. The camera checks the whole body is in frame, the user starts by holding both arms in an ⭕ over the head, and each time the head goes near the floor and comes back up counts as one rep. At the end it shows the count and makes a photo card to share. Success: people finish a run and post the card to Instagram stories or Reels because it is fun to share.

## Positioning
No wearable, no app install, no referee: the phone camera counts and verifies reps in the browser, and the result is a ready-to-post card with your photo and count.

## Operating Context
- Phone stands on the floor or leans on a wall; user steps back so head to toe is visible.
- Solo or team. Team: everyone stays in frame, one person does burpees at a time, per-person counts plus a team total.
- Results get shared to Instagram (stories/Reels) through the phone's share sheet.

## Capabilities and Constraints
- Plain static HTML/CSS/JS served by a tiny Node server (`server.js`), no build step. MediaPipe Pose loaded from jsdelivr.
- No ranking or server: the site is static (GitHub Pages). A Supabase ranking existed and was removed on 2026-10-23.
- Camera needs HTTPS on phones.

## Brand Commitments
Working name "버피 3분 챌린지". User placed no binding constraints on name, color, or tone.

## Evidence on Hand
No testimonials, user counts, partners, or records; none may be invented.

## Product Principles
- Shareable first: every screen should look good in a screen recording or story.
- Start fast: one tap from landing to camera.
- The count is the hero: honest, big, and verifiable.
- Fun over solemn, but the count is never a joke.
