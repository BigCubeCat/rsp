export interface IElement {
  name: string;
  img: string;
  color: string;
}

export const ELEMENTS: IElement[] = [
  {
    name: "rock", img: "/elems/rock.png", color: "#fbd165"
  },
  {
    name: "scissors", img: "/elems/scissors.png", color: "#a9cc8a"
  },
  {
    name: "paper", img: "/elems/paper.png", color: "#f4b1c0"
  },
  {
    name: "lizard", img: "/elems/lizzard.png", color: "#a9fba9"
  },
  {
    name: "spock", img: "/elems/spock.png", color: "#c0b1f4"
  },
  {
    name: "unicorn", img: "/elems/cat.png", color: "#c4c4f4"
  },
  {
    name: "fire", img: "/elems/fire.png", color: "#fbc0c0"
  },
  {
    name: "donut", img: "/elems/donut.png", color: "#b1c0f4"
  },
  {
    name: "surfer", img: "/elems/cool.png", color: "#f4f4c0",
  }
]

export const ELEMENTS_KEYS: { [key: string]: IElement } = {
  "rock": ELEMENTS[0],
  "scissors": ELEMENTS[1],
  "paper": ELEMENTS[2],
  "lizard": ELEMENTS[3],
  "spock": ELEMENTS[4],
  "unicorn": ELEMENTS[5],
  "fire": ELEMENTS[6],
  "donut": ELEMENTS[7],
  "surfer": ELEMENTS[8],
}

export const ELEMENTS_INDEXES: { [key: string]: number } = {
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
