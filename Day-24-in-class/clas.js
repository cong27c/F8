// const arr1 = [1,-9, 2,3,4,5,"Hoang","F8",NaN]

// console.log(arr1.includes());
// console.log(arr1.find(item => item % 2));
// console.log(arr1.findIndex(item => item === 2));


// const arrFilter = arr1.filter(item =>{
//     return item % 2 === 1;
// })
// console.log((arrFilter));

// const students = [
//     {id:1, fullname: "Le Van Minh", age: 28, address: "Nghe An"},
//     {id:2, fullname: "Hoang Quang Thang", age: 18, address: "Vinh Phuc"},
//     {id:3, fullname: "Kieu Minh Tue", age: 21, address: "Vinh Phuc"},
// ]

// const over18 = students.filter(item => item.age > 18)
// console.log(over18);

// console.log(students.filter(index => index.id > 2));

// const arr1 = [1, 2,3,4]
// const arr2 = ["a","b","c","d"]
// console.log(arr1.concat(arr2, [[100]], ["x","y","z"],undefined));
// console.log(arr2);
/**
 * Shallow copy
 * - concat
 * - spread
 * - slice
 * -....
 * Deep Copy
 * - JSON: Nhược điểm là ko xủ lý được phương thức và các giá trị đặc
 * biệt,
 * - Dùng thư viện: lodash
 * - StructuredClone()
 */

// const arrDeepCopy = structuredClone(arr1)

// // console.log(arr1);
// const arr = [1,2,3,[4,[4.1,4.2,[4.24,4.26]]],2,7]
// console.log(arr.flat(Infinity));
// console.log(arr.flat());
// console.log(arr.flat());

/**
 * ES6(2015) for array
 * destructuring
 * rest
 * spread
*/


// const arr1 = [1 ,2, 3]
// const arr2 = [4, 5, 6]

// const [a,b,c,...rest] = arr1;
// console.log(a);
// console.log(b);
// console.log(rest);
// const newArr = [...arr1, "Cong", ...arr2]
// console.log(newArr);
// const obj = {
//     a: 1,
//     b: 2
// }
// const obj1 = {
//     c: 3,
//     d: 4,
// }
// const newObj = {...obj, ...obj1}
// console.log(newObj);


// const arr1 = [5,100,3,"Cong",1,48,2,"Cong"]
// const arr2 = ["Hoang","Dung","Minh","Cong"]
// console.log(arr1.sort());
// console.log(arr1);
// console.log(arr2.sort().reverse());
// console.log(arr1.sort((a, b) => b - a));
// console.log(arr1.sort((a, b) => a - b ));

// const students = [
//     { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
//     { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
//     { id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "HaNoi" },
//     { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
//     { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
//     { id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
//     ];



// const sortbyName = function(data) {
//     data.sort((a, b) => {
//         let aFullName = a.fullname.split(" ")
//         let bFullName = b.fullname.split(" ")
//         let aFirstName = aFullName.pop()
//         let bFirstName = bFullName.pop()
//         if(aFirstName < bFirstName) return -1
//         if(aFirstName > bFirstName) return 1
//         if(aFullName.join(" ") > bFullName.join(" ")) return 1
//         if(aFullName.join(" ") < bFullName.join(" ")) return -1
//     })
// }
// sortbyName(students)
// console.log(students);
