const API_URL = "https://shift-winter-2023-backend.onrender.com/api/rsp/option";

async function GetBotAnswer(options: string[]): Promise<string> {
  const result = await fetch(API_URL, {
    method: "POST", headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ "options": options })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(json => json.result)
  return result;
}

async function GetClassic(): Promise<string> {
  return GetBotAnswer(["rock", "scissors", "paper"]);
}

async function GetSpock(): Promise<string> {
  return GetBotAnswer(["rock", "scissors", "paper", "lizard", "spock"]);
}

export { GetBotAnswer, GetClassic, GetSpock };

