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

export function SetDefaultStorage() {
  localStorage.clear();
  localStorage.setItem("winRate", "" + defaultStorage.winRate);
  localStorage.setItem("history", JSON.stringify(defaultStorage.history));
}

export function GetHistory(): GameResultRow[] {
  const res = JSON.parse(localStorage.history);
  if (res === undefined) {
    SetDefaultStorage();
    return [];
  }
  return res;
}

export function GetPercent(): number {
  const res = localStorage.winRate;
  if (res === undefined) {
    SetDefaultStorage();
    return 0;
  }
  return res;
}


export function AddGame(name: string, result: resultType) {
  let history = GetHistory();
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
