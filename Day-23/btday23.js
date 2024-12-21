
const products = [
	{
		id: 1,
		name: "Apple iPhone 12",
		price: 1000,
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 900,
	},
	{
		id: 3,
		name: "Xiaomi Mi 11",
		price: 800,
	},
	{
		id: 4,
		name: "Apple iPhone 11",
		price: 700,
	},
	{
		id: 5,
		name: "Samsung Galaxy S20",
		price: 600,
	},
	{
		id: 6,
		name: "Xiaomi Mi 10",
		price: 500,
	},
];

const getTopProducts = function(products, top) {
    let newArray = []
    for(let i = 0; i < products.length; i++) {
        if(products[i].id <= top) {
            newArray.push(products[i])
        }
    }
    return newArray
}
console.log(getTopProducts(products, 3));




//Cho mảng danh mục đa cấp như sau: 
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



const flattenCategories = function(categories, level = 0) {
	let newArray = []
	for(let i = 0; i < categories.length; i++) {
		const category = categories[i];
 		const current = {
			id: category.id,
			name: category.name,
			level
		};
		
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




let newCategories = flattenCategories(categories)


const getCategoryName = function(newCategories, categoryId) {
	for(let i = 0; i < newCategories.length; i++) {
		if(newCategories[i].id === categoryId) {
			return newCategories[i].name
		} 
	}
	return null 
}
console.log(getCategoryName(newCategories, 3)); // Output: "Apple"
console.log(getCategoryName(newCategories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(newCategories, 99)); // Output: null
