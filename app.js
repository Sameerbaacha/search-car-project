
// Obeject is collection of data
// var student ={} => how create a obejct
// name : "Mustafa", => properties and its value

// var student = {
// 	name: "Ghulam Mustafa",
// 	email: "gmustafa@gmail.com",
// 	phone: 3313408302,
// 	enrolled: true
// }


// show all object data
//* console.log(student);

// show only property value
//* console.log(student.name);
//* console.log(student.email);


// in bject how to add new property 
// student is obeject name and .class is peroperty and = "WAM", is its perperty value. 
// in object add new perperty but in last 
// ager obect empty he to b add ho ho jae ga 
// agr obecjt mn phile se he peroperty add he to use peroperty k value change kar k new value update kar dega.

// student.class = "WAM",
// console.log(student);

// object mn se peroperty delete karna delete ka keyword use kar k object name or .peroperty.

// delete student.name
// delete student.email

// console.log(student);


// obeject k under ek or object add karna
// ye kaise hoga main object-name ab kis property name ya new obejct name us k baat us k under object k peroperty and us k values

// student.clas ={
// 	name: "WAM",
// 	time: "9 - 11"
// }
// student.clas.subject = {
// 	subName: "Math",
// 	time: "5-5"
// }

// console.log(student);


// how to add arry in objects 

// student.subject = ["HTNL", "CSS", "JS"];

// console.log(student); => print only obeject
// console.log(student.subject); => print only object peroperty and its value
// console.log(student.subject[2]) => print objects propertyand its ary value on index no


// In object under the array ho to add in new value in object array
// object name array peropertyname and push(""); 

// student.subject = ["HTNL", "CSS", "JS"];
// student.subject.push("React")
// console.log(student);


// check property  in object method is in 

// console.log("school" in student);


// get data form obejcts in peropeerty values
 
// var carBrand ={
// 	honda:{
// 		civic:{
// 			reborn:{
// 				image:"",
// 				name: "reborn",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		},
// 		city:{
// 			city2007:{
// 				image:"",
// 				name: "city2007",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		}

// 	},
// 	toyota:{
// 		carola:{
// 			gli:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			},
// 			Xli:{
// 				image:"",
// 				name: "Xlic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		},
// 		induscarola:{
// 			indusone:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			},
// 			industwo:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		}
// 	}
	
// }

// var user = "honda"
// var model = "civic"

// for(var company in carBrand){
// 	for(var model in carBrand[company]){
// 		for(variant in carBrand[company][model]){
// 			console.log(carBrand[company][model][variant]);
// 		}
// 	}
	
// }

// var user = "honda"
// var model = "civic"

// console.log(carBrand[user][model]) 

// get all data form objects 
// in javascript object ka ek loop hota he or ye jub tak chale jitne objects k under jitne key pari he tab tak chale ga
// key means property name 

// for(var company in carBrand){
// 	for(var model in carBrand[company]){
// 		for(var variant in carBrand[company][model]){
// 			console.log(carBrand[company][model][variant].name);
// 		}
// 	}
// }





var carVariants ={
	honda:{
		civic:{
			image:"<img src='images/civic.jpg'>",
			name: "civic",
			model: 2020,
			gets: 4,
			wheels: 5,
			colors: ["black", "red", "White"],
			price: 450000,
		},
		city:{
			image:"<img src='images/city.jpg'>",
			name: "city",
			model: 2020,
			gets: 4,
			wheels: 5,
			colors: ["black", "red", "White"],
			price: 450000,
		},
	},
	toyota:{
		carola:{
			image:"<img src='images/crola-xli.jpg'>",
			name: "carola",
			model: 2020,
			gets: 4,
			wheels: 5,
			colors: ["black", "red", "White"],
			price: 450000,
		},
		Yaris:{
			image:"<img src='images/yariscross.jpg'>",
			name: "yariscross",
			model: 2020,
			gets: 4,
			wheels: 5,
			colors: ["black", "red", "White"],
			price: 450000,
		},
	},
}






var company = document.getElementById("company");
var brand = document.getElementById("brand");
var allCars = document.getElementById("allCars");

company.innerHTML = `<option value="">Select Brand</option>`
brand.innerHTML = `<option value="">Select Model</option>`


for(var key in carVariants){
	company.innerHTML +=`
	<option value="${key}">${key.toUpperCase()}</option>
	`
	for(var key1 in carVariants[key]){
		var carData = carVariants[key][key1]

		var colorsDiv = ""
	for(var i = 0; i < carData.colors.length; i++){
		colorsDiv += `
		<div class="m-1" style="width:20px; height:20px; border: 1px solid #9d9494; border-radius:10px; background-color: ${carData.colors[i]}"></div>
		`
	}


			allCars.innerHTML += `
		<div class="col-md-4">
			<div class="result-box">
			<div class="image-thumb">${carData.image}</div>
				<h3>${carData.name}</h3>
				<h4>Model: ${carData.model}</h4>
				<p>Gets: ${carData.gets}</p>
				<p>Wheels: ${carData.wheels}</p>
				<div class="car-color d-flex">${colorsDiv}</div> 
				<h6>Price: ${carData.price}</h6>
				
			</div>
		</div>`
	

	}
}


function onCompanyChange(){
	brand.innerHTML = ""
	brand.innerHTML = `<option value="">Select Brand</option>`
	for(var key in carVariants[company.value]){
		brand.innerHTML +=`
		<option value="${key}">${key.toUpperCase()}</option>
		`
	}
}


function filterCars(){
  
	var collactData = (carVariants[company.value][brand.value])
	allCars.innerHTML = `
		<div class="col-md-12">
			<div class="result-box last-bx">
			<div class="image-thumb">${collactData.image}</div>
			<div class="cont-box">
			    <h3>${collactData.name}</h3>
				<h4>Model: ${collactData.model}</h4>
				<p>Gets: ${collactData.gets}</p>
				<p>Wheels: ${collactData.wheels}</p>
				<div class="car-color d-flex">${colorsDiv}</div> 
				<h6>Price: ${collactData.price}</h6>
			</div>
		</div>`
}



