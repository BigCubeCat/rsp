import { Rules } from './rules';

type result = 1 | 2 | 3;

export function gameResult(rules: Rules, first: string, second: string): result {
  if (first === second) {
    return 1;
  }
  console.log(rules)
  for (let value of rules[first]) {
    if (value == second) {
      return 2;
    }
  }
  return 3;
}
