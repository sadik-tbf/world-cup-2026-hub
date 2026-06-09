# World Cup 2026 Hub

Modern Next.js + TypeScript + Tailwind website for the World Cup 2026.

## Features

- Premium sports news homepage design
- Teams, players, fixtures, standings, predictions, simulator, stadiums, statistics, fantasy, account, and admin pages
- Dark/light mode support
- Local predictions storage
- Dynamic team/player/match detail routes
- API endpoints for teams, players, and predictions
- PWA support via `next-pwa`
- Firebase client initialization ready for Auth and Firestore

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Notes

- Update Firebase credentials in `lib/firebase.ts` or via environment variables.
- Add full team squad data and tournament fixtures in `lib/data.ts` for deeper content.
- Enhance admin and account pages with authenticated Firestore actions.
