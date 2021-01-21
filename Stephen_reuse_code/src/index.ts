import { MatchReader } from './MatchReader';
import { MatchResult } from './types';
import { CsvFileFeader } from './CsvFileReader';
const csvReader = new CsvFileFeader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

let wins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    wins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    wins++;
  }
}
console.log(wins);
