# 🇮🇳 NYAYANOW — Know your rights. Know your next step.

A 30-second police rights navigator for India. NyayaNow helps ordinary citizens understand what to do when they interact with the police — in seconds, with verified official sources.

**Situation → Your rights → What to do → Where to get help → Official source**

Built for an Independence Day civic-tech hackathon. No login. No tracking. Works offline.

> 📋 **Every implemented function is documented in [`FEATURES.md`](./FEATURES.md).**

---

## What it does

- **8 verified situation guides** — questioning, arrest, FIR refusal, search, property seizure, abuse/threat, bribe, complaint — plus an "I'm not sure" guided flow.
- **30-second mode** — every guide leads with "What matters right now": 3–5 actionable points, with a **Listen button** that reads the summary out loud in the selected language (English / हिन्दी / తెలుగు) using the browser's built-in speech synthesis — no audio leaves the device.
- **Natural-language navigator** — describe what happened in your own words; an on-device matcher (never an LLM) maps your words to a verified situation ID. Low confidence → asks you instead of guessing.
- **Arrest flagship** — interactive stage timeline (arrest → interrogation → custody → Magistrate) with BNSS/Constitution sources at each stage.
- **What happens next?** — visual action paths backed by verified procedure.
- **Trust layer** — every legal claim links to an official primary source (India Code, Constitution of India, NALSA, NHRC, CPGRAMS, cybercrime portal). "We don't ask you to trust NyayaNow. We show you where the information comes from."
- **Privacy-first** — Situation Memory and Complaint Checklist store data **only on this device** (localStorage, never a server). Privacy Mode hides personal info and clears local data in one tap.
- **Emergency mode** — simplified screen with official helpline numbers, all tappable `tel:` links: 112 (All-in-One SOS), 100, 101, 102, 181, 1098, 1930, 1091 (24×7 women support), 1064 (anti-corruption / bribery), 14433 (NHRC human rights), and 15100 (NALSA free legal aid). NyayaNow is not an emergency service; it only shows official numbers.
- **Legal help with an all-states checklist** — all 36 states & union territories selectable (multi-select, persisted on-device); each links to its verified official SLSA portal and shows the **SLSA address / phone / email on the card** (parsed from the official NALSA directory on 15 Aug 2026 — `STATE_CONTACTS` in `src/data/registry.ts`), plus a **"Find my DLSA →"** link to the state's official DLSA contact page; national resources always shown. No district-level data is rendered inline — district contacts are always reached through the official state page (never invented or partial numbers).
- **English · हिन्दी · తెలుగు** — full UI + content translation, legal sources always preserved in the original.
- **PWA** — installable, offline-cached core pages, with a **live offline indicator** (banner appears only when the connection drops: "You're offline · showing cached content — verify against official sources") and an honest "cached content may not reflect the latest law" note.

## Legal accuracy policy

- The knowledge base is **structured data** (see `src/data/`) — AI never generates legal content.
- Every legal claim cites a verified source from `src/data/sources.ts` (India Code handles verified against official pages, NALSA, NHRC, etc.).
- Section numbers follow the **official BNSS↔CrPC correspondence table** (UP Police, 2024) — e.g. BNSS §47 = CrPC §50 (grounds of arrest), §48 = §50A (inform relative), §57/§58 = §56/§57 (Magistrate within 24 hours), §173 = §154 (FIR), §175(3) = §156(3) (Magistrate may order investigation).
- Where the law depends on facts, the app says so instead of guessing.

## Tech stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · React Router (hash) · Lucide icons · vite-plugin-pwa

```
npm install
npm run dev        # develop
npm run build      # typecheck + production build (dist/)
npm run preview    # serve the production build
```

## Project structure

```
src/
  data/        # verified knowledge base: sources, situations (8), ui strings, help registry
  lib/         # on-device classifier, local-only storage
  context/     # language, privacy mode, dialog/emergency state
  components/
    layout/    # Navbar, Footer, Layout shell
    ui/        # Modal, Button, badges, icons
    dialogs/   # Source / Disclaimer / Privacy dialogs
    situation/ # RightCard, Timeline, 30-second summary, route cards…
    features/  # EmergencyOverlay, SituationMemory, Checklist, LanguageSwitcher
  pages/       # Home, Situation, Navigator, NotSure, Complaints, Help, Sources, About
```



## Disclaimer

NyayaNow provides general legal information for public awareness. It is not a substitute for advice from a qualified legal professional. See the in-app Legal Disclaimer.
