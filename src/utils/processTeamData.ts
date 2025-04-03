interface RawTeamData {
  name: string;
  games?: number;
  wins?: number;
  draws?: number;
  losses?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  points?: number;
  position?: number;
}

interface ProcessedTeamData {
  position: number;
  name: string;
  games: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export const processTeamData = (sffData: any, ffnsoData: any): ProcessedTeamData[] => {
  const processedTeams = new Map<string, ProcessedTeamData>();

  // Обработка данных с sff-siberia.ru
  if (sffData && Array.isArray(sffData.teams)) {
    sffData.teams.forEach((team: RawTeamData) => {
      processedTeams.set(team.name, {
        position: team.position || 0,
        name: team.name,
        games: team.games || 0,
        wins: team.wins || 0,
        draws: team.draws || 0,
        losses: team.losses || 0,
        goalsFor: team.goalsFor || 0,
        goalsAgainst: team.goalsAgainst || 0,
        points: team.points || 0
      });
    });
  }

  // Обработка данных с ffnso.ru
  if (ffnsoData && Array.isArray(ffnsoData.teams)) {
    ffnsoData.teams.forEach((team: RawTeamData) => {
      if (processedTeams.has(team.name)) {
        // Обновляем существующие данные
        const existingTeam = processedTeams.get(team.name)!;
        processedTeams.set(team.name, {
          ...existingTeam,
          games: team.games || existingTeam.games,
          wins: team.wins || existingTeam.wins,
          draws: team.draws || existingTeam.draws,
          losses: team.losses || existingTeam.losses,
          goalsFor: team.goalsFor || existingTeam.goalsFor,
          goalsAgainst: team.goalsAgainst || existingTeam.goalsAgainst,
          points: team.points || existingTeam.points
        });
      } else {
        // Добавляем новую команду
        processedTeams.set(team.name, {
          position: team.position || 0,
          name: team.name,
          games: team.games || 0,
          wins: team.wins || 0,
          draws: team.draws || 0,
          losses: team.losses || 0,
          goalsFor: team.goalsFor || 0,
          goalsAgainst: team.goalsAgainst || 0,
          points: team.points || 0
        });
      }
    });
  }

  // Преобразуем Map в массив и сортируем по очкам
  const sortedTeams = Array.from(processedTeams.values()).sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    // Если очки равны, сортируем по разнице мячей
    const goalDiffA = a.goalsFor - a.goalsAgainst;
    const goalDiffB = b.goalsFor - b.goalsAgainst;
    if (goalDiffB !== goalDiffA) {
      return goalDiffB - goalDiffA;
    }
    // Если разница мячей равна, сортируем по забитым мячам
    return b.goalsFor - a.goalsFor;
  });

  // Обновляем позиции после сортировки
  return sortedTeams.map((team, index) => ({
    ...team,
    position: index + 1
  }));
}; 