import { TRules } from './rules';
import { resultType } from '../../utils/history';


export function gameResult(
  rules: TRules, first: string, second: string
): resultType {
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
