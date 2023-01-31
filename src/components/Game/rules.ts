export type Rules = {
  [key: string]: string[]
}

export const classicRules: Rules = {
  "rock": ["scissors"],
  "scissors": ["paper"],
  "paper": ["rock"],
}

export const spockRules: Rules = {
  "rock": ["scissors", "lizard"],
  "scissors": ["paper", "lizard"],
  "paper": ["rock", "spock"],
  "spock": ["rock", "scissors"],
  "lizard": ["paper", "spock"],
}

export const customRules: Rules = {
  "rock": ["scissors", "surfer", "donut", "unicorn", "fire"],
  "scissors": ["surfer", "donut", "paper"],
  "paper": ["rock"],
  "donut": ["surfer"],
  "surfer": ["scissors", "paper"],
  "unicorn": ["surfer", "donut"],
  "fire": ["surfer", "unicorn", "donut"],
  "lizard": ["paper", "spock"],
  "spock": ["rock", "scissors"],
}

// order important!
export const allObjects: string[] = [
  "rock", "scissors", "paper", "lizard", "spock", "unicorn",
  "fire", "donut", "surfer"
]

