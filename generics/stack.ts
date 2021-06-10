interface DataStucture<T> {
    push(newItem: T): void;
    pop(): T;
}

class Stack<T> implements DataStucture<T> {

    items: Array<T> = [];
    push(newItem: T): void {
        this.items.push(newItem);
    }
    pop(): T {
       return this.items.pop();
    }
    peek(): T {
        return this.items[this.items.length - 1];
    }
}

let myNumberStack: Stack<number> = new Stack<number>();

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(69);

console.log(myNumberStack.pop()); //69
console.log(myNumberStack.peek());
console.log(myNumberStack.pop());
console.log(myNumberStack.pop());