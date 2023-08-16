class Node {
    constructor(message, when) {
        this.message = message;
        this.when = when;
        this.next = null;
    }
}

class TimedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(message, when) {
        const newNode = new Node(message, when);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    dequeue() {
        if (this.head) {
            const message = this.head.message;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return message;
        }
        return null;
    }

    first() {
        if (this.head) {
            return this.head.message;
        }
        return null;
    }

    isEmpty() {
        return this.head === null;
    }
}

function main() {
    const queue = new TimedQueue();

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function promptMenu() {
        console.log("Menu:");
        console.log("1. Add");
        console.log("2. Show");
        console.log("3. Exit");

        rl.question("Enter your choice by entering the number: ", function(choice) {
            switch (choice) {
                case "1":
                    rl.question("Enter message: ", function(message) {
                        rl.question("Enter a time in seconds: ", function(when) {
                            queue.enqueue(message, parseInt(when));
                            console.log("Your message is now added to the queue.");
                            promptMenu();
                        });
                    });
                    break;
                case "2":
                    if (!queue.isEmpty()) {
                        console.log("Next message in the queue:", queue.first());
                        setTimeout(function() {
                            const dequeuedMessage = queue.dequeue();
                            console.log("Dequeued after the period of time (that you entered in seconds) elapsed:", dequeuedMessage);
                            promptMenu();
                        }, queue.head.when * 1000);
                    } else {
                        console.log("Queue is empty.");
                        promptMenu();
                    }
                    break;
                case "3":
                    console.log("Exited the program.");
                    rl.close();
                    break;
                default:
                    console.log("Invalid. please type 1,2, or 3 to choose what you would like to do. ");
                    promptMenu();
                    break;
            }
        });
    }

    promptMenu();
}

main();
