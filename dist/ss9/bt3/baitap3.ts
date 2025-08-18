function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const person = { name: "Alice" };
const job = { role: "Developer" };

const result = mergeObjects(person, job);
console.log(result); 

