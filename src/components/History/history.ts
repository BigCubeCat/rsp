type Storage = {
  winRate: number;
  history: string[];
  countClassic: number;
  countSpock: number;
}


export function getStorage() {
  localStorage.getItem("winRate")
}
