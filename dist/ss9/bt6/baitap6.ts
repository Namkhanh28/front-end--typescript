function firstMatch<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
  for (let item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 0)); 
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4)); 
interface Person {
  id: number;
  name: string;
}
const people: Person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
console.log(firstMatch(people, (p) => p.name.startsWith("B"))); 

