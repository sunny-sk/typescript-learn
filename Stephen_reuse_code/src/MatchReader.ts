import { dateStringToDate } from './util';
import { MatchResult, RowType } from './types';
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: RowType[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): RowType => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
