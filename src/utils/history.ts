export type resultType = "no" | "draw" | "win" | "loose";

export type GameResultRow = {
  name: string;
  date: Date;
  result: resultType;
}

type Storage = {
  winRate: number;
  history: GameResultRow[];
}

const defaultStorage: Storage = {
  winRate: 0,
  history: [],
}

export function setDefaultStorage() {
  localStorage.clear();
  localStorage.setItem("winRate", "" + defaultStorage.winRate);
  localStorage.setItem("history", JSON.stringify(defaultStorage.history));
}

export function getHistory(): GameResultRow[] {
  const res = JSON.parse(localStorage.history);
  if (res === undefined) {
    setDefaultStorage();
    return [];
  }
  return res;
}

export function getPercent(): number {
  const res = localStorage.winRate;
  if (res === undefined) {
    setDefaultStorage();
    return 0;
  }
  return res;
}


export function addGame(name: string, result: resultType) {
  let history = getHistory();
  history.push({ result: result, date: new Date(), name: name });
  let countWin = 0;
  for (let r of history) {
    if (r.result === "win") {
      countWin++;
    }
  }
  localStorage.setItem("winRate", "" + Math.floor(countWin / history.length * 100));
  localStorage.setItem("history", JSON.stringify(history));
}
