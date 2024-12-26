//Bài tập về nhà K11 + K12 Buổi 22
const data = [];
const handleRegister = function(name, password, email) {
    const in4 = {name, password, email, role: "user"}
    if(name && password && email) {
       return data.push(in4)
     } else {
        return "Thông tin ko đầy đủ vui lòng nhập lại "
     }
}
const handleLogin = function(email, password) {
    for(let item of data) {
        if(item.email === email && item.password === password) {
            return item
        } 
    }
    return "Thông tin đăng nhập không hợp lệ"
}

// handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com")
// handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com")
// console.log(data);
// const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
// console.log(dataLogin);


const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];
console.log(categories.length);
const flattenCategories = function(categories, level = 0) {
    const newArray = []
    for(let i = 0; i < categories.length; i++) {
        const category = categories[i]
        const current  = {
            id: category.id,
            name: category.name,
            level
        }
        newArray.push(current)
        
        if(category.children) {
                newArray = newArray.concat(
                    flattenCategories(category.children, level + 1)
                )
            }
    }
    return newArray
}
console.log(flattenCategories(categories));


