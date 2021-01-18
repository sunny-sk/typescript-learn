import { NumberCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

let numberCollection: NumberCollection = new NumberCollection([10, 4, 5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

let stringCollection = new CharacterCollection('sanny');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(1);

linkedList.sort();
linkedList.print();
