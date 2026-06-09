export type Team = {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  coach: string;
  ranking: number;
  stadium: string;
  group: string;
  marketValue: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  squad: Player[];
};

export type Player = {
  id: string;
  name: string;
  teamId: string;
  position: string;
  age: number;
  club: string;
  marketValue: string;
  goals: number;
  assists: number;
  appearances: number;
  rating: number;
  photo: string;
};

export type Fixture = {
  id: string;
  date: string;
  stage: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  city: string;
  kickoff: string;
  status: 'scheduled' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
};

export type Stadium = {
  id: string;
  name: string;
  city: string;
  country: string;
  capacity: number;
  image: string;
  hostedMatches: string[];
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
};

export type Prediction = {
  matchId: string;
  homeScore: number;
  awayScore: number;
};

export type UserProfile = {
  uid: string;
  displayName: string;
  email: string;
  favoriteTeamIds: string[];
  savedPredictions: Prediction[];
};
