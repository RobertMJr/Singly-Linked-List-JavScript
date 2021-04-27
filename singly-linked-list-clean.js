class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.tail = null;
		this.head = null;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) this.tail = null;
		return currentHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let currentNode = this.head;
		for (let i = 0; i < idx; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	set(idx, val) {
		let foundNode = this.get(idx);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);
		const newNode = new Node(val);
		const prevNode = this.get(idx - 1);
		const nextNode = this.get(idx);
		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
		return true;
	}
	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();
		const prevNode = this.get(idx - 1);
		const removedNode = prevNode.next;
		prevNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	reverse() {
		// Create a variable called node and initialize it to the head property
		let node = this.head;
		// Swap the head and tail
		this.head = this.tail;
		this.tail = node;
		let prev = null;
		let next = null;
		// Loop through the list
		for (let i = 0; i < this.length; i++) {
			// Set next to be the next property on whatever our current node is
			next = node.next;
			// Set the next property on the node to be whatever prev is (previous node)
			node.next = prev;
			// Set prev to be the value of the node variable
			prev = node;
			// Set the node variable to be the value of the next variable
			node = next;
		}
		return this;
	}
}
