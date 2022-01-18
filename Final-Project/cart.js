






const shoes = {
        pic : Image.src,
        name: shoeName,
        price: shoePrice,
        shoeSizes: {
            wholeSizes:[1,2,3,4,5,6,7,8,9,10,11,12],
            halfSizes: [1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5,10.5,11.5,12.5]
        }

}
// Get all shoes
fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/%7BsneakerId%7D", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "6c78450f39msh6c76bea784edff0p16536bjsnc31b515e9ae3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Get shoes by id
fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/%7BsneakerId%7D", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "6c78450f39msh6c76bea784edff0p16536bjsnc31b515e9ae3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


// get shoes by brand
fetch("https://v1-sneakers.p.rapidapi.com/v1/brands", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "6c78450f39msh6c76bea784edff0p16536bjsnc31b515e9ae3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Get shoes by gender
fetch("https://v1-sneakers.p.rapidapi.com/v1/genders", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "6c78450f39msh6c76bea784edff0p16536bjsnc31b515e9ae3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});