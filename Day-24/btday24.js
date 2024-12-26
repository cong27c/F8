//Bài tập 1
const fruits = ["apple", "banana", "kiwi", "kiwi", "banana", "orange", "apple", "kiwi"];

const result = fruits.filter((item, index) => {
    return fruits.indexOf(item) === index
})
// console.log(result);

//Bài tập 2

let a = 0,b = 1,temp

const fibonacci = function(n) {
    if(n <= 0 || n === "string" || !Number.isInteger(n)) {
        console.log("Số phần tử không hợp lệ");
        return
    }
    if(n === 1) {
        console.log(0);
        return
    } 
    for (let i = 1; i < n; i++) {
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(a);
}


// fibonacci(5); // 0 1 1 2 3

// fibonacci(10); // 0 1 1 2 3 5 8 13 21 34

// fibonacci(0);// Số phần tử không hợp lệ

// fibonacci(-5); // Số phần tử không hợp lệ

// fibonacci("abc"); // Số phần tử không hợp lệ

// fibonacci(1); // 0

// fibonacci(3.2) 



