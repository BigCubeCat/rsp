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
    name: "paper", img: "/img/paper.png", color: "#f4b1c0"
  },
  {
    name: "scissors", img: "/img/scissors.png", color: "#a9cc8a"
  },
  {
    name: "lizard", img: "/img/lizzard.png", color: "#a9fba9"
  },
  {
    name: "spock", img: "/img/spock.png", color: "#c0b1f4"
  }
]

export const elementKeys = {
  "rock": elements[0],
  "paper": elements[1],
  "scissors": elements[2],
  "lizzard": elements[3],
  "spock": elements[4],
}
