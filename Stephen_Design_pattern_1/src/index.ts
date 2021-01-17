import { Sorter } from './sorter';
import { NumberCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

let numberCollection = new NumberCollection([10, 4, 5, 0]);
let sorter = new Sorter(numberCollection);
sorter.sort();
// console.log(numberCollection.data);

let stringCollection = new CharacterCollection('sanny');
let sorter1 = new Sorter(stringCollection);
sorter1.sort();
// console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();
