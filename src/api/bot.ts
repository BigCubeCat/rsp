const API_URL = "https://shift-winter-2023-backend.onrender.com/api/rsp/option";

async function getBotAnswer(options: string[]): Promise<string> {
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
  return getBotAnswer(["rock", "scissors", "paper"]);
}

async function GetSpock(): Promise<string> {
  return getBotAnswer(["rock", "scissors", "paper", "lizard", "spock"]);
}

async function GetCustom(options: string[]): Promise<string> {
  return getBotAnswer(options);
}


export { GetCustom, GetClassic, GetSpock };

