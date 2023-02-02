export interface IElement {
  name: string;
  img: string;
  color: string;
}

export const elements: IElement[] = [
  {
    name: "rock", img: "/img/rock.png", color: "#fbd165"
  },
  {
    name: "scissors", img: "/img/scissors.png", color: "#a9cc8a"
  },
  {
    name: "paper", img: "/img/paper.png", color: "#f4b1c0"
  },
  {
    name: "lizard", img: "/img/lizzard.png", color: "#a9fba9"
  },
  {
    name: "spock", img: "/img/spock.png", color: "#c0b1f4"
  },
  {
    name: "unicorn", img: "/img/cat.png", color: "#c4c4f4"
  },
  {
    name: "fire", img: "/img/fire.png", color: "#fbc0c0"
  },
  {
    name: "donut", img: "/img/donut.png", color: "#b1c0f4"
  },
  {
    name: "surfer", img: "/img/cool.png", color: "#f4f4c0",
  }
]

export const elementKeys: { [key: string]: IElement } = {
  "rock": elements[0],
  "scissors": elements[1],
  "paper": elements[2],
  "lizard": elements[3],
  "spock": elements[4],
  "unicorn": elements[5],
  "fire": elements[6],
  "donut": elements[7],
  "surfer": elements[8],
}

export const elementIndexes: { [key: string]: number } = {
  "rock": 0,
  "scissors": 1,
  "paper": 2,
  "lizard": 3,
  "spock": 4,
  "unicorn": 5,
  "fire": 6,
  "donut": 7,
  "surfer": 8,
}
