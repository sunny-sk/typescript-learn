import fs from 'fs';
import { MatchResult, RowType } from './types';
import { dateStringToDate } from './util';
export class CsvFileFeader {
  data: RowType[] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.replace('\r', '').split(','))
      .map(
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
