const LinkedList = require('./linked-list-class');

let SLL = new LinkedList();

function main() {
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    console.log(SLL);
}

main();

function addTauhida() {
    SLL.insertLast('Tauhida');
    console.log(SLL);
}

addTauhida();

function removeHusker() {
    SLL.remove('Husker');
    console.log(SLL);
}

removeHusker();

function insertCapricaBeforeBoomer() {
    SLL.insertBefore('Caprica');
    console.log(SLL);
} 

insertCapricaBeforeBoomer();