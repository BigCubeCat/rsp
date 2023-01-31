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

// order important!
export const allObjects: string[] = [
  "rock", "scissors", "paper", "lizard", "spock", "unicorn",
  "fire", "donut", "surfer"
]

export const customRules: Rules = {
  "rock": [
    "scissors",
    "lizard",
    "fire",
    "surfer"
  ],
  "scissors": [
    "paper",
    "lizard",
    "unicorn",
    "donut"
  ],
  "paper": [
    "rock",
    "spock",
    "unicorn",
    "surfer"
  ],
  "lizard": [
    "paper",
    "spock",
    "unicorn",
    "surfer"
  ],
  "spock": [
    "rock",
    "scissors",
    "fire",
    "surfer"
  ],
  "unicorn": [
    "rock",
    "spock",
    "donut",
    "surfer"
  ],
  "fire": [
    "scissors",
    "paper",
    "lizard",
    "unicorn"
  ],
  "donut": [
    "rock",
    "paper",
    "lizard",
    "spock",
    "fire"
  ],
  "surfer": [
    "scissors",
    "fire",
    "donut"
  ]
}

