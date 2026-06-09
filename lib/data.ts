import type { Fixture, NewsItem, Player, Stadium, Team } from '@/types';

export const teams: Team[] = [
  {
    id: 'usa',
    name: 'United States',
    shortName: 'USA',
    flag: '🇺🇸',
    coach: 'Gregg Berhalter',
    ranking: 8,
    stadium: 'MetLife Stadium',
    group: 'B',
    marketValue: '$540M',
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    squad: []
  },
  {
    id: 'eng',
    name: 'England',
    shortName: 'ENG',
    flag: '🏴',
    coach: 'Gareth Southgate',
    ranking: 3,
    stadium: 'Wembley',
    group: 'D',
    marketValue: '$1.1B',
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    squad: []
  },
  {
    id: 'bra',
    name: 'Brazil',
    shortName: 'BRA',
    flag: '🇧🇷',
    coach: 'Tite',
    ranking: 1,
    stadium: 'Maracanã',
    group: 'G',
    marketValue: '$1.4B',
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    squad: []
  }
];

export const players: Player[] = [
  {
    id: 'christian-pulisic',
    name: 'Christian Pulisic',
    teamId: 'usa',
    position: 'RW',
    age: 25,
    club: 'AC Milan',
    marketValue: '$55M',
    goals: 32,
    assists: 18,
    appearances: 78,
    rating: 8.6,
    photo: 'https://images.unsplash.com/photo-1517927033932-b2c2f7d3d5a7?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'harry-kane',
    name: 'Harry Kane',
    teamId: 'eng',
    position: 'ST',
    age: 30,
    club: 'Bayern Munich',
    marketValue: '$90M',
    goals: 45,
    assists: 12,
    appearances: 68,
    rating: 9.1,
    photo: 'https://images.unsplash.com/photo-1530845640681-79f64d5d71a4?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'neymar',
    name: 'Neymar Jr.',
    teamId: 'bra',
    position: 'LW',
    age: 32,
    club: 'Paris Saint-Germain',
    marketValue: '$95M',
    goals: 58,
    assists: 37,
    appearances: 80,
    rating: 9.3,
    photo: 'https://images.unsplash.com/photo-1508204760189-1d1b62ad3d3e?auto=format&fit=crop&w=400&q=60'
  }
];

export const fixtures: Fixture[] = [
  {
    id: 'match-01',
    date: '2026-06-11',
    stage: 'Group A',
    homeTeam: 'Canada',
    awayTeam: 'Mexico',
    stadium: 'MetLife Stadium',
    city: 'East Rutherford',
    kickoff: '18:00 EDT',
    status: 'scheduled'
  },
  {
    id: 'match-02',
    date: '2026-06-12',
    stage: 'Group B',
    homeTeam: 'USA',
    awayTeam: 'Wales',
    stadium: 'Empire Field',
    city: 'Toronto',
    kickoff: '21:00 EDT',
    status: 'scheduled'
  }
];

export const stadiums: Stadium[] = [
  {
    id: 'metlife',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    country: 'USA',
    capacity: 82500,
    image: 'https://images.unsplash.com/photo-1558980664-10bbf6bfa45e?auto=format&fit=crop&w=1200&q=80',
    hostedMatches: ['match-01']
  },
  {
    id: 'wembley',
    name: 'Wembley Stadium',
    city: 'London',
    country: 'England',
    capacity: 90000,
    image: 'https://images.unsplash.com/photo-1542736667-069246bdbc94?auto=format&fit=crop&w=1200&q=80',
    hostedMatches: []
  }
];

export const news: NewsItem[] = [
  {
    id: 'news-1',
    title: 'World Cup 2026 team preview: USA ambitions soar',
    summary: 'The hosts arrive with home advantage and a deep squad built for the knockout stages.',
    category: 'Preview',
    date: 'June 5, 2026',
    image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'news-2',
    title: 'Top tactical battles to watch in the opening week',
    summary: 'From fast transitions to compact lines, these coaches set the tone for the tournament.',
    category: 'Analysis',
    date: 'June 6, 2026',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60'
  }
];
