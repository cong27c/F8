// BÀI TẬP DANH SÁCH (SORT)

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

//BÀI TẬP BMI 
// const calcBMI = function() {
//     const weight = parseFloat(prompt("Nhập cân nặng vào đây(kg)"))
//     const height = parseFloat(prompt("Nhập chiều cao vào đây(m)"))
//     if(isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0 ) {
//         return alert("Dữ liệu ko hợp lệ vui lòng nhập lại")
//     }
//     const BMI = weight / (height * height)
//         if(BMI >= 25) {
//             alert("Béo phì")
//         } else if(BMI >= 23) {
//             alert("Thừa cân")
//         } else if(BMI >= 18.5) {
//             alert("Bình thường")
//         } else {
//             alert("Thiếu cân")
//         }
// }
// calcBMI()

// Hoán vị 2 số
// function swapNumber(a, b) {
//     let temp = a
//     a = b
//     b = temp
//     console.log(a , b);
// }
// swapNumber(6, 9)

//Sắp xếp 3 số
// function sortNumber(a, b, c) {

//     if(b > a) {
//         let temp = a
//         a = b
//         b = temp
//     }
//     if(c > a) {
//         let temp1 = a
//         a = c 
//         c = temp1
//     }
//     if(c > b) {
//         let temp2 = b
//         b = c
//         c = temp
//     }
//     console.log(c,b,a);
// }

// sortNumber(4,6,1)

// Viết hàm kiểm tra 3 số là độ dài 3 cạnh tam giác

// const isTriangle = function(a, b, c) {
//     a = parseFloat(prompt("Cạnh a"))
//     b = parseFloat(prompt("Cạnh b"))
//     c = parseFloat(prompt("Cạnh c"))
//     if(isNaN(a) || isNaN(b) || isNaN(c) ||  a <= 0 || b <= 0 || c <= 0 ) {
//          alert("du lieu ko hop le vu long nhap lai")
//          return
//     }
//     if(a + b < c || a + c < b || b + c < a) {
//         return  alert("false")
      
//     }
//     return  alert("true");
// }
// isTriangle()

// Viết hàm in ra các số chính phương từ 2 đến n

// const printSquareNumber= function(n) {
//     for(let i = 2 ; i <=n ; i++) {
//         for(let j = 2; j < n; j++) {
//             if(j * j === i) {
//                 console.log(i);
//             }
//         }
//     }
// }
// printSquareNumber(10)
// printSquareNumber(20)

//Viết hàm in ra các số nguyên tố từ 2 đến n:
// const printPrimeNumber = function(n) {
//    ??
// }
// printPrimeNumber(10)

//Tìm số lớn nhất
// const findMaxNumber = function(a, b, c) {
//         if(b > a) {
//         let temp = a
//         a = b
//         b = temp
//     }
//     if(c > a) {
//         let temp1 = a
//         a = c 
//         c = temp1
//     }
//     if(c > b) {
//         let temp2 = b
//         b = c
//         c = temp2
//     }
//     console.log(a);
// }
// findMaxNumber(5,7,9)

//Kiểm tra số cùng dấu
// const checker= function(a, b) {
//     if(a + b < a) console.log("2 số khác dấu");
//     else console.log("2 số cùng dấu")
// }
// checker(5, -7)
// checker(5, 7)

// Tính tiền taxi

// const taxiBill = function(km) {
//     km = parseFloat(prompt("Nhập số km vào đây"))
//     let phi1 = 10000 + 29 * 8000 
//     let phi2 = 10000
//     if(km === "string" || km <= 0 || isNaN(km)) {
//         return alert("Số km không hợp lệ vui lòng nhập lại")
//     }
//     if(km > 30) {
//         alert(`Tổng tiền là : ${phi1 + (km-30) * 7000}đ`)
//     }
//     else if(km > 1) {
//         alert(`Tổng tiền là : ${phi2 + (km-1) * 8000}đ`)
//     }
//     else {
//         alert(`Tổng tiền là : ${phi2}đ`)
//     }
// }
// taxiBill();

//Viết hàm in ra bảng cửu chương từ 1 đến 10 dựa vào vòng lặp for
// const printMultiplicationTable = function() {
//     for(let i = 2; i <= 10;i++) {
//         console.log(`Bảng cửu chương ${i}`);
//         for(let j = 1; j <=10; j++) {
//             console.log(`${i} x ${j} = ${i*j}`);
//         }
//     }
// }
// printMultiplicationTable()

//Viết hàm in ra tam giác cân theo ký tự nhập vào
const printIsoscelesTriangle = function(n, character) {
    let str = ""
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            
        }
    }
    return str 
}
console.log(printIsoscelesTriangle(5, "*"));