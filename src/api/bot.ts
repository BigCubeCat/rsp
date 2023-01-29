type Result = {
  result: string;
}

async function getClassic(url: string): Promise<string> {
  const result = await fetch(url, {
    method: "POST", headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ "options": ["r", "p", "s"] })
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


export { getClassic };
