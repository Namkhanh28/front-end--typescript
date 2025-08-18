class DataStore<T> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      console.log("Index không hợp lệ!");
    }
  }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll()); 
numberStore.remove(0);
console.log(numberStore.getAll());
const stringStore = new DataStore<string>();
stringStore.add("apple");
stringStore.add("banana");
console.log(stringStore.getAll()); 


interface Person {
  id: number;
  name: string;
}

const personStore = new DataStore<Person>();
personStore.add({ id: 1, name: "Alice" });
personStore.add({ id: 2, name: "Bob" });
console.log(personStore.getAll());
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
