const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
];
const studentsList = function(array) {
    let group = {
        A: [],
        B: [],
        C: [],
        D: [],
    }
    let highest = array[0]
    let lowest = array[0]
 
    for(i = 0; i < array.length; i++) {
        if(array[i].score > highest.score) {
            highest = array[i]
        }  
        if(array[i].score < lowest.score) {
            lowest = array[i]
        }
        if (array[i].score >= 8) {
            group.A.push(array[i])
        } else if (array[i].score >= 6) {
            group.B.push(array[i])
        } else if (array[i].score >= 4) {
            group.C.push(array[i])
        } else {
            group.D.push(array[i])
        }
    }
    return {
        highest,
        group,
        lowest,
    }
}
console.log(studentsList(students));



