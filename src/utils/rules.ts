export type TRules = {
  [key: string]: string[]
}

export const CLASSIC_RULES: TRules = {
  "rock": ["scissors"],
  "scissors": ["paper"],
  "paper": ["rock"],
}

export const SPOCK_RULES: TRules = {
  "rock": ["scissors", "lizard"],
  "scissors": ["paper", "lizard"],
  "paper": ["rock", "spock"],
  "spock": ["rock", "scissors"],
  "lizard": ["paper", "spock"],
}

// order important!
export const ALL_OBJECTS: string[] = [
  "rock", "scissors", "paper", "lizard", "spock", "unicorn",
  "fire", "donut", "surfer"
]

export const CUSTOM_RULES: TRules = {
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

