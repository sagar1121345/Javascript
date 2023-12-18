/*

    Stack memory for    -  Primitive Data type

    Heap memory for    -   Non-Primitive Data type

    Stack is pass value

    Heap is pass address

*/

// Stack memomry
let primitiveNum = 34

let changesPrimitiveNum = primitiveNum

changesPrimitiveNum = 45

console.log(`Stack memomry is`,primitiveNum,changesPrimitiveNum);


// Heap memomry
let nonPrimitiveObj = {
    name:'xyz'
}

let changesPrimitiveObj = nonPrimitiveObj

changesPrimitiveObj.name = 45

console.log(`Heap memomry is `,nonPrimitiveObj.name,changesPrimitiveObj.name);

console.log(primitiveNum,changesPrimitiveNum);