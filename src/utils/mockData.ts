export const tournaments = [
  {
    id: "leon-2",
    name: "LEON-Вторая лига А",
    season: "2024-2025"
  },
  {
    id: "sff-cup",
    name: "Кубок СФФ Сибирь",
    season: "2024"
  },
  {
    id: "ffnso",
    name: "Чемпионат ФФНСО",
    season: "2024"
  }
];

export const mockTeamsByTournament = {
  "leon-2": [
    {
      position: 1,
      name: "Сибирь",
      games: 15,
      wins: 12,
      draws: 2,
      losses: 1,
      goalsFor: 35,
      goalsAgainst: 12,
      points: 38
    },
    {
      position: 2,
      name: "Текстильщик",
      games: 15,
      wins: 11,
      draws: 2,
      losses: 2,
      goalsFor: 28,
      goalsAgainst: 10,
      points: 35
    },
    {
      position: 3,
      name: "Торпедо",
      games: 15,
      wins: 10,
      draws: 3,
      losses: 2,
      goalsFor: 25,
      goalsAgainst: 12,
      points: 33
    }
  ],
  "sff-cup": [
    {
      position: 1,
      name: "Енисей",
      games: 10,
      wins: 8,
      draws: 1,
      losses: 1,
      goalsFor: 24,
      goalsAgainst: 8,
      points: 25
    },
    {
      position: 2,
      name: "Новосибирск",
      games: 10,
      wins: 7,
      draws: 2,
      losses: 1,
      goalsFor: 20,
      goalsAgainst: 9,
      points: 23
    },
    {
      position: 3,
      name: "Динамо-Барнаул",
      games: 10,
      wins: 6,
      draws: 2,
      losses: 2,
      goalsFor: 18,
      goalsAgainst: 10,
      points: 20
    }
  ],
  "ffnso": [
    {
      position: 1,
      name: "Спартак",
      games: 12,
      wins: 10,
      draws: 1,
      losses: 1,
      goalsFor: 30,
      goalsAgainst: 10,
      points: 31
    },
    {
      position: 2,
      name: "Локомотив",
      games: 12,
      wins: 9,
      draws: 2,
      losses: 1,
      goalsFor: 25,
      goalsAgainst: 8,
      points: 29
    },
    {
      position: 3,
      name: "Заря",
      games: 12,
      wins: 8,
      draws: 2,
      losses: 2,
      goalsFor: 22,
      goalsAgainst: 12,
      points: 26
    }
  ]
};

export const mockMatchesByTournament = {
  "leon-2": [
    {
      date: "2024-03-29",
      homeTeam: "Сибирь",
      awayTeam: "Текстильщик",
      homeScore: 2,
      awayScore: 1,
      tournament: "LEON-Вторая лига А",
      status: "completed"
    }
  ],
  "sff-cup": [
    {
      date: "2024-03-28",
      homeTeam: "Енисей",
      awayTeam: "Новосибирск",
      homeScore: 3,
      awayScore: 1,
      tournament: "Кубок СФФ Сибирь",
      status: "completed"
    }
  ],
  "ffnso": [
    {
      date: "2024-03-27",
      homeTeam: "Спартак",
      awayTeam: "Локомотив",
      homeScore: 2,
      awayScore: 0,
      tournament: "Чемпионат ФФНСО",
      status: "completed"
    }
  ]
}; 