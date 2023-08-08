function getRandomElement(items: string[]): string {
  return items[Math.floor(Math.random()*items.length)];
}

async function GetClassic(): Promise<string> {
  return getRandomElement(["rock", "scissors", "paper"]);
}

async function GetSpock(): Promise<string> {
  return getRandomElement(["rock", "scissors", "paper", "lizard", "spock"]);
}

async function GetCustom(options: string[]): Promise<string> {
  return getRandomElement(options);
}


export { GetCustom, GetClassic, GetSpock };

