# 🇮🇳 NyayaNow — Implemented Functions

**Know your rights. Know your next step.**

This document lists every function implemented in the NyayaNow web app.
Stack: React 19 · Vite · TypeScript · Tailwind CSS v4 · React Router (hash) · Lucide icons · PWA.
No backend, no login, no accounts — everything runs on-device.

---

## 1. Situation Guides (core)

- **8 verified situation guides**, each with a predictable structure:
  - Situation header + urgency indicator
  - **30-second "What matters right now"** summary (3–5 actionable points)
  - Your rights (plain-language "What this means" + legal basis + official source)
  - What you can do / What to avoid
  - Interactive timeline (where applicable) & "What happens next?" visual path
  - Get legal help · Where to complain · Official sources · Last-verified date
  - Legal disclaimer
- Situations covered: Police stopped/questioning me · Arrested · FIR refused ·
  Search · Property seized · Police threatened/abused/assaulted · Bribe ·
  I want to complain
- **"I'm not sure" guided flow** — short non-legal questions → recommends the right guide

## 2. Natural-Language Navigator

- "Tell us what happened" — type what happened in your own words
- **On-device classifier** maps words → verified situation ID (EN / हिन्दी / తెలుగు)
- Low confidence → honest "couldn't confidently identify" fallback (never guesses)
- AI never generates legal content — it only matches to verified guides

## 3. Arrest Flagship Experience

- Interactive 4-stage timeline: Arrest → Interrogation → Custody → Magistrate
- BNSS §/Constitution sources at every stage, with plain-language meaning
- 24-hour Magistrate production, grounds of arrest, inform a relative, meet a lawyer

## 4. Complaint Navigator

- Choose what happened → recommended route, why it may apply, what to prepare,
  official website, legal help
- Covers: FIR refused · threatened · assaulted · asked for money · human-rights
  issue · cybercrime · general grievance

## 5. Legal Help (all India)

- **Checklist of all 36 states & union territories** (multi-select, persisted on-device)
- Each state card: official SLSA portal, **address / phone / email** (from the
  official NALSA directory), and **"Find my DLSA →"** link
- National resources: NALSA, helpline **15100**, NALSA directory
- Every URL verified live (August 2026); no invented contact data

## 6. Trust Layer

- Every legal claim links an official primary source (India Code, Constitution
  of India, NALSA, NHRC, CPGRAMS, cybercrime portal)
- **Official Sources** page + dialog with the 5-step "How we verify" process
- Last-verified dates on claims
- Legal disclaimer dialog

## 7. Emergency Mode

- Persistent "⚡ I need help now" button → simplified full-screen emergency view
- Official numbers as tappable `tel:` links: **112**, 100, 101, 102, 181, 1098,
  1930, **1091**, **1064**, **14433**, **15100**
- Honest note: NyayaNow is not an emergency service — it only shows official routes

## 8. Voice (Text-to-Speech)

- **Listen button** on every 30-second summary card
- Reads the summary + numbered steps out loud in the selected language
  (English `en-IN` / हिन्दी `hi-IN` / తెలుగు `te-IN`)
- Digits converted to native script (౨౪ / २४) and punctuation cleaned so Indic
  voices read proper words — no English-digit garble
- Built on the browser's Web Speech API; nothing is recorded or sent anywhere

## 9. Privacy-First Tools

- **Situation Memory** — record date/time/location/station/officer/what happened/
  notes; **save multiple memories as cards**, per-card delete, clear all
- **Complaint preparation checklist** (on-device)
- **Privacy Mode** toggle — hides personal info, one-tap clear of local data
- Everything stored **only in localStorage** — no server, no login, ever

## 10. Multilingual (EN · हिन्दी · తెలుగు)

- Full UI + content translation (458+ strings)
- Language switcher in the navbar; selection persisted on-device
- Legal sources always preserved in the original

## 11. PWA & Offline

- Installable PWA with offline caching of core pages
- **Live offline indicator** — when the connection drops, a banner appears:
  "You're offline · showing cached content — verify against official sources"
  (hides automatically when back online)
- Honest note that cached content may not reflect the latest law

## 12. Accessibility & Responsiveness

- Semantic HTML, keyboard navigation, visible focus, screen-reader labels,
  large touch targets, sufficient contrast
- `prefers-reduced-motion` respected
- Mobile-first: verified at 360–1440px
- No color-only information

---

## Files of interest

| Area | File |
|---|---|
| Verified knowledge base (8 situations) | `src/data/situations.ts` |
| Verified sources | `src/data/sources.ts` |
| States + SLSA contacts | `src/data/registry.ts` |
| UI strings (EN/HI/TE) | `src/data/ui.ts` |
| Classifier | `src/lib/classifier.ts` |
| Local storage (privacy-first) | `src/lib/storage.ts` |
| Speech cleanup | `src/lib/speech.ts` |
| Voice button | `src/components/ui/SpeakButton.tsx` |
| Offline indicator | `src/components/features/OfflineIndicator.tsx` |

*Last updated: August 2026*
