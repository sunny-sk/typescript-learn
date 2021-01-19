export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export type RowType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
