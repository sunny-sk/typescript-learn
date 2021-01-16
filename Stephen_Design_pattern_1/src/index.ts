import { Sorter } from './sorter';
import { NumberCollection } from './NumbersCollection';
let arr = [10, 4, 5, 0];
let numberCollection = new NumberCollection(arr);
let sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
