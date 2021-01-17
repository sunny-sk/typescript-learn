import { Sorter } from './sorter';
import { NumberCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

let numberCollection = new NumberCollection([10, 4, 5, 0]);
let sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

let stringCollection = new CharacterCollection('sanny');
let sorter1 = new Sorter(stringCollection);
sorter1.sort();
console.log(stringCollection.data);
