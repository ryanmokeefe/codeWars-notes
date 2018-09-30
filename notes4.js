import { nextTick } from "../../../Library/Caches/typescript/2.6/node_modules/@types/async";

class Node {
    constructor (data, next) {
        this.data = data
        this.next = next

    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null
        this.length = 0

    }
    insert (item) {
        this.head = new Node(item, this.head)
        this.length++
    }

    search () {
        let idx = 0
        let node = this.head

        while (node) {
            if (node.data === item) return idx
            let node = node.next
            idx++
            
        }
        return -1
    }
}


class DoublyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0

    }
    insert (item) {
        if (!self.head) {
            self.head = new_node
        } else {
            self.tail.next = new_node
            new_node.prev = self.tail
        }

        self.tail = new_node
        this.length++
    }

    search () {
        let idx = 0
        let node = this.head

        while (node) {
            if (node.data === item) return idx
            let node = node.next
            idx++
            
        }
        return -1
    }
}
