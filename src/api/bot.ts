type Result = {
  result: string;
}

function getClassic<Result>(url: string): Promise<Result> {
  return fetch(url, {
    method: "POST", mode: "cors", headers: {
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

}


export { getClassic };
