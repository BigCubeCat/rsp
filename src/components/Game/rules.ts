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

