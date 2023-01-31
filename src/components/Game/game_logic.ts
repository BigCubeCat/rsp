import { Rules } from './rules';
import { resultType } from '../History/history';


export function gameResult(rules: Rules, first: string, second: string): resultType {
  if (first === second) {
    return "draw";
  }
  for (let value of rules[first]) {
    if (value == second) {
      return "win";
    }
  }
  return "loose";
}
