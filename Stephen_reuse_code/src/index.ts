import { MatchReader } from './MatchReader';
import { MatchResult } from './types';
const reader = new MatchReader('football.csv');
reader.read();
//enum - enumeration

// TODO://
let wins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    wins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    wins++;
  }
}
console.log(wins);
