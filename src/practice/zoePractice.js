
// function main () {
//   console.log("start");
//   rec(1);
//   console.log('finish');
// }

// function rec (n) {
//   if (n==4) {
//     console.log("stop");
//   }else{
//     console.log(n);
//     rec(n+1);
//     console.log(n);
//   }
// }

// main()


// function main (){
//   sod (5);
// }

// function what (n){
//   const arr = []
//   for (let i=0;i<n;i++){
//     arr.push(n);
//   }
//   console.log(arr.join(''));
// }

// function sod(n){
//   if (n==1)console.log(n);
//   else{
//     what(n);
//     sod(n-1);
//     what(n);
//   }
// }

// main()


// 1 = x + 2 
// -1 = x 

// a1 = 1 
// a0 = -1 

// function main(){
//   rec(1);
//   console.log('finish')
// }

// function rec(n){
//   if (n==3){
//     console.log('stop');
//   } else {
//     console.log(n)
//     rec(n with weird math)
//   }
// }

// function F(n){
//   if (n==1){
//     return 1;
//   } else {
//     return F(n-1)*F(n-1) - F(n-1) - 1;
//   }
// }

// console.log(F(10))



// function Multiply(a,b){
//   if (b==0){
//     return 0;
//   } else {
//     return a + Multiply(a,b-1)
//   }
// }

//console.log(Multiply(3,5))

// 1. gets a number and returns the sum of its digits 
      
// function sumOfDigits(n)
// {
//    if(n == 0){
//      return 0 ;
//    }

//    return (n % 10) + sumOfDigits(parseInt(n/10)) ;
//  }

// console.log(sumOfDigits(1202))

// 2. gets a number and returns how many digits it has 

// function numberOfDigits(n){
//     if(n == 0){
//       return 0;
//     }
//     return 1 + numberOfDigits(parseInt(n/10));
// }

// console.log(numberOfDigits(1244));

//3. gets a number and returns the number of odd digits it has.


// function numberOfOddDigits(n){
//   let i = 0;
//   {
//     if(n == 0){
//       return 0;
//     }

//     if(n%2!=0){
//       i=i+1
//     }
  
//     return (i) + numberOfOddDigits(parseInt(n/10));
    

//   }
// }

// console.log(numberOfOddDigits(123456789));

// //4. gets a string and prints it backwards 

function main(str){
    const array = str.split('');
    flipArray(array)
    return array;
  }
  
  function flipArray(array){
    let temp = '';
    i=1;
  
    if (i == array.length/2){
      return 0;
    }
    
    temp = array[i-1];
    array[i-1] = array[array.length-i];
    array[array.length-i] = temp;
    i = i+1;
  
    temp = array[i-1];
    array[i-1] = array[array.length-i];
    array[array.length-i] = temp;
    
  
    return array
  }
  
  
  
  //console.log(main('abcdefghijklmnopqrstuvwxyz'));
  
  // 
  
  const arr = [1, 50, 200, 63, -5, 0.5, 9];
  
  function getMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    if (arr[0] > arr[1]) {
      arr.splice(1, 1);
    } else {
      arr.splice(0, 1);
    }
  
    return getMax(arr);
  }
  
  //console.log(getMax(arr))
  
  function getMin(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    if (arr[0] < arr[1]) {
      arr.splice(1, 1);
    } else {
      arr.splice(0, 1);
    }
  
    return getMin(arr);
  }
  
  //console.log(getMin(arr))
  
  function sumEvens(arr){
    if (arr.length === 1) {
      return arr[0];
    }
    
    if(arr[0]%2==0){
      if(arr[1]%2==0){
        arr[0]=arr[0]+arr[1];
      } else {
        arr.splice(1, 1);
      } 
    } else {
      arr.splice(0, 1);
    }
  
    arr.splice(1, 1);
    return sumEvens(arr)
  }
  
  //console.log(sumEvens([2,4,2,12]))
  
  function multiplyItems(arr){
  
    if(arr.length==1){
      return arr[0];
    }
    arr[0] = arr[0]*arr[1];
    arr.splice(1, 1);
    return multiplyItems(arr)
    
      
  }
  
  //console.log(multiplyItems([2,4,2,12]))
  
  
  function averageItems(arr){
  
    if(arr.length==1){
      return arr[0];
    }
    arr[0]=arr[0]+arr[1];
    arr[0]=arr[0]/2;
    arr.splice(1, 1);
    return averageItems(arr)
      
  }
  
  //console.log(averageItems([0,100,50,20,70,48,48,51]));
  
  function Bottle(char, n) {
    console.log(n)
    if (n <= 0) return;
    
    if (n === 1) {
      console.log([char]);
    } else {
      let array = [];
      for (let i = 0; i < n; i++) {
        array.push(char);
      }
      console.log(array);
      
      Bottle(char, n - 2);
  
      console.log(array);
    }
  }
  
  //Bottle('*', 5);
  
  function bottle(char, n) {
    function bottleHelper(currentN) {
  
  
      const spaces = Math.floor((n - currentN) / 2);
      const line = ' '.repeat(spaces) + char.repeat(currentN);
      console.log(line);
      
      if (currentN == 1){
        return;
      } 
      
        bottleHelper(currentN - 2);
        console.log(line);
    }
  
    bottleHelper(n);
  }
  
  //bottle('#', 9);

  // node 
class Node {
    constructor(x, next) {
      this.info = x;
      this.next = next;
    }
  
    getInfo() {
      return this.info;
    }
  
    next() {
      return this.next;
    }
  
    toString() {
      if (this.info === null) {
        return '// ';
      } else {
        return `${this.info.toString()} -> `;
      }
    }

    // 3
  
    // static countNodes(head) {
    //   let currentNode = head;
    //   let count = 0;
  
    //   while (currentNode) {
    //     count++;
    //     currentNode = currentNode.next;
    //   }
  
    //   return count;
    // }



    // static countNodes(head, count = 0){
    //     if (head == null){
    //         return count
    //     } else {
    //         return this.countNodes(head.next, count + 1)
    //     }
    // }

    //1->2->6->0->//
    //head = 1 // 1 + 3
    //               head = 2  // 1 + 2
    //                               head - 6 //  1 + 1
    //                                                head - 0  // 1 + 0
    //                                                                  head - null // return 0
    static countNodes(head){
        if(head){
            return 1 + this.countNodes(head.next)
        }
        return 0
    }

  
    // static getMax(head) {
    //   let currentNode = head;
    //   let max = 0;
  
    //   while (currentNode) {
    //     if (currentNode.info > max) {
    //       max = currentNode.info;
    //     }
    //     currentNode = currentNode.next;
    //   }
    //   return max;
    // }

    static getMax(head) {
        if(head.next){
            if (head.info > head.next.info){
                head.next = head.next.next;
                return this.getMax(head)
            } else {
                return this.getMax(head.next)
            }
        }
        return head.info
    }

  }
  
  
  function printLinkedList(head) {
    let currentNode = head;
    let listString = '';
    while (currentNode) {
      listString += currentNode.toString();
      currentNode = currentNode.next;
    }
    console.log(listString);
  }

  // 4
  
//   function getListSum(list) {
//     let currentNode = list;
//     let sum = 0;
  
//     while (currentNode) {
//       sum += currentNode.getInfo();
//       currentNode = currentNode.next;
//     }
  
//     return sum;
//   }

function getListSum(list) {
    if(list){
        return list.info + getListSum(list.next)
    }
    return 0
}

  // 6
 
  function insertIntoSortedList(list, value) {
    const newNode = new Node(value, null);

    if (!list || value <= list.info) {
        newNode.next = list;
        return newNode;
    }
    let current = list;
    while (current.next && current.next.info < value) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    return list;
}

function insertIntoSortedList1(list, value) {
    const newNode = new Node(value, null);

    if (!list || value <= list.info) {
      newNode.next = list;
      return newNode;
    }

    if (!list.next || list.next.info >= value) {
      newNode.next = list.next;
      list.next = newNode;
    } else {
      list.next = insertIntoSortedList1(list.next, value);
    }

    return list;
  }

 // 7 

function createSortedLists(...arrs){
    let sortedLinkedLists = [];

    for (let arr of arrs){
        let list = null;
        for (i=0; i<arr.length; i++){
            list = insertIntoSortedList(list,arr[i])
        }
        sortedLinkedLists.push(list);
    }
    

    return sortedLinkedLists;
}
  
// 8-

function mergeSortedLists(...lists) {
    if (lists.length <= 1) {
      return lists[0] || null;
    }
    for (i = 1; i < lists.length; i++) {
        let List1 = lists[0];
        let List2 = lists[i];
        temp = new Node(null);
        current = temp;
    
        while (List1 && List2){
            if (List1.info < List2.info){
                current.next = List1; 
                List1 = List1.next 
            } else {
                current.next = List2; 
                List2 = List2.next 
            }
            current = current.next;
        }
    
        if (List1){
            current.next = List1;
        }
        if (List2){
            current.next = List2;
        }  
        
        lists[0] = temp.next
    }
  
    return lists[0];
  }

  //

  function removeDuplicates(head) {
    if (!head) {
      return null; 
    }
  
    if (head.info === head.next?.info) {
      const duplicateNode = head.next;
      head.next = removeDuplicates(duplicateNode.next);
      duplicateNode.next = null;
      return head;
    } 
    
    head.next = removeDuplicates(head.next);
    return head;
    
  }
  
  
  const node5 = new Node(3, null);
  const node4 = new Node(4, node5);
  const node3 = new Node(2, node4);
  //const node2 = new Node(5, null);
  const node1 = new Node(2, node3);
  const head = new Node(3, node1);
  
  //1->2->2->3->4->5->5->5->5->-6->6
  
  //const newNode = new Node(56, head.next);
  
  
  //head.setNext(newNode);
  
  
  //printLinkedList(head); 

  //printLinkedList(removeDuplicates(head))
  
  const numberOfNodes = Node.countNodes(head);
  //console.log(`How many nodes: ${numberOfNodes}`);
  
  const list = head;
  const totalSum = getListSum(list);
  //console.log(`sum of the values:${totalSum}`)
  
  const max = Node.getMax(head);
  //console.log(`max: ${max}`);

  // make function that gets the linked list and removes duplicate nodes 

  let list2 = null;
  list2 = insertIntoSortedList1(list2,4);

  list2 = insertIntoSortedList1(list2,7);

  list2 = insertIntoSortedList1(list2,9);
 
  list2 = insertIntoSortedList1(list2,2);

  list2 = insertIntoSortedList1(list2,5);

  list2 = insertIntoSortedList1(list2,10);

  list2 = insertIntoSortedList1(list2,-1);
 
  list2 = insertIntoSortedList1(list2,3);
  //printLinkedList(list2);


  let array1 = [1,2,2,3,4,5,5,5,6,6];
  let array2 = [4,5,5];
  let array3 = [5,6,6]

  // //1->2->2->3->4->5->5->5->5->-6->6

  let sortedLists = createSortedLists(array1,array2,array3);

  printLinkedList(sortedLists[0]); // 2 -> 4 -> 8 -> 10 ->
  //printLinkedList(sortedLists[1]); // 3 -> 6 -> 9 ->
  //printLinkedList(sortedLists[2]); // 1 -> 5 -> 7 ->

  printLinkedList(removeDuplicates(sortedLists[0]))

  //mergedSortedList = mergeSortedLists(sortedLists[0],sortedLists[1],sortedLists[2]);
  //printLinkedList(mergedSortedList);

 // file: myModule.js

//  const util = require('util');
//  const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });
 
//  function generateRandomEquation() {
//    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//    const operator = Math.random() < 0.5 ? '+' : '-'; // Randomly choose '+' or '-'
//    return util.format('%d %s %d', num1, operator, num2);
//  }
 
//  function evaluateEquation(equation) {
//    return eval(equation); // Evaluate the equation
//  }
 
//  function askQuestion() {
//    const equation = generateRandomEquation();
//    const correctAnswer = evaluateEquation(equation);
 
//    readline.question(`What is the result of ${equation}? `, (userAnswer) => {
//      const parsedUserAnswer = parseFloat(userAnswer);
//      if (!isNaN(parsedUserAnswer) && parsedUserAnswer === correctAnswer) {
//        console.log(":) Correct!");
//        readline.close();
//      } else {
//        console.log(":( Incorrect. Try again!");
//        askQuestion();
//      }
//    });
//  }
 
//  console.log('Welcome to the Equation Quiz!');
//  console.log('Please provide the correct result for each equation.');
 
//  askQuestion();
 
// // if the input is 4+1.98-9.5, then output should be 'Your solution to 4+1.98=5.98 is: 9.5'
 
//  const person = {
//   details:{
//     age:34, name:'shahar',
//     address:{
//       city:'Karkur',
//       street:{
//         num:1
//       }
//     }
//   }
//  };
//  //non-enumerable
//  Object.defineProperty(person, 'zip', { value: '123456'});

//  console.dir(person)//default depth:2
//  console.dir(person, {showHidden:true, depth:3})

// { details:
//     { age: 34,
//       name: 'shahar',
//     address: { city: 'Karkur', street: [Object]}}}
// { details:
//     {age: 34,
//     name:'shahar,
//     address: { city: 'Karkur', street: [Object]}}},
//     [zip]: '123456' }

//     // showHidden:true

console.table([
  { id: 1, name: 'Shahar', },
  { id: 2, name: 'Hanoch' },
  { id: 3, name: 'Gaya'}
]);

var i = 0;
function long() {
  let limit = i + 1E7;
  for(;i<limit;i++){}
  return i;
}

// console.time('long'); //Label
// console.timeLog('long', 'elapsed, value', long());
// console.timeLog('long', 'elapsed, value', long());
// console.timeEnd('long');


// const chalk = require('chalk');
// console.log(chalk.rgb(100,200,100)('Ahalan'));


const ProgressBar = require('progress');

// const progressBar = new ProgressBar(':bar :percent :eta', {
//   total: 50,
//   complete: '>',
//   incomplete: '_'
// });

// const timer = setInterval(() => {
//   progressBar.tick();
//   if(progressBar.complete){
//     clearInterval(timer);
//     console.log('Completed');
//   }
// }, 100);


//(id, name, course, score)



  // class Student {
  //   constructor(id, name, course, score, next) {
  //     this.id = id;
  //     this.name = name;
  //     this.course = course;
  //     this.score = score;
  //     this.next = next;
  //   }

  //   getInfo() {
  //     return this.info;
  //   }
  
  //   next() {
  //     return this.next;
  //   }
  
  //   toString() {
  //     return `${this.name}(${this.id}) -> `;
  //   }
  // }
  
  // function printLinkedList(head) {
  //   let currentNode = head;
  //   let listString = '';
  //   while (currentNode) {
  //     listString += currentNode.toString();
  //     currentNode = currentNode.next;
  //   }
  //   console.log(listString + 'null');
  // }

  // function findStudentNode(head, id) {
  //   let currentNode = head;
  //   while (currentNode) {
  //     if (currentNode.id === id) {
  //       return currentNode;
  //     }
  //     currentNode = currentNode.next;
  //   }
  //   return null;
  // }
  
  // function replaceStudents(head, id1, id2) {
  //   if (id1 === id2) {
  //     // No need to swap if both IDs are the same
  //     return head;
  //   }
  
  //   // Find the nodes corresponding to the given IDs
  //   let node1 = findStudentNode(head, id1);
  //   let node2 = findStudentNode(head, id2);
  
  //   if (!node1 || !node2) {
  //     // At least one of the nodes is not found in the linked list
  //     console.log('One or both students not found in the linked list.');
  //     return head;
  //   }
  
  //   // Swap the nodes by switching their positions
  //   let prevNode1 = null;
  //   let prevNode2 = null;
  //   let currentNode = head;
  
  //   while (currentNode) {
  //     if (currentNode === node1) {
  //       if (prevNode1) {
  //         prevNode1.next = node2;
  //       } else {
  //         head = node2;
  //       }
  //     } else if (currentNode === node2) {
  //       if (prevNode2) {
  //         prevNode2.next = node1;
  //       } else {
  //         head = node1;
  //       }
  //     }
  
  //     // Update previous nodes and move to the next node
  //     prevNode1 = currentNode === node1 ? prevNode1 : currentNode;
  //     prevNode2 = currentNode === node2 ? prevNode2 : currentNode;
  //     currentNode = currentNode.next;
  //   }
  
  //   // Swap the next pointers of the nodes
  //   let tempNext = node1.next;
  //   node1.next = node2.next;
  //   node2.next = tempNext;
  
  //   return head;
  // }
  
  // // Test the replaceStudents function
  // const student3 = new Student(9, 'd', 'b', 6, null);
  // const student2 = new Student(5, 'i', 'a', 8, student3);
  // const student1 = new Student(2, 'f', 'h', 7, student2);
  // const students = new Student(3, 'b', 'g', 4, student1);
  
  // console.log('Original linked list:');
  // printLinkedList(students);
  
  // console.log('\nAfter switching students 5 and 2:');
  // const newHead = replaceStudents(students, 5, 2);
  // printLinkedList(newHead);
  
 
  