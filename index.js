const pizzas = [
	{
		id: 1,
		nombre: "pizza de Muzzarella",
		precio: 500,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
	},

	{
		id: 2,
		nombre: "pizza de Cebolla",
		precio: 1500,
		ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
	},

	{
		id: 3,
		nombre: "pizza Napolitana",
		precio: 1350,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
	},

	{
		id: 4,
		nombre: "pizza 4 Quesos",
		precio: 1380,
		ingredientes: [
			"Muzzarella",
			"Tomate",
			"Queso Azul",
			"Parmesano",
			"Roquefort",
		],
	},

	{
		id: 5,
		nombre: "pizza Especial",
		precio: 1000,
		ingredientes: [
			"Muzzarella",
			"Tomate",
			"Aceitunas",
			"Anchoas",
			"Cebolla",
		],
	},

	{
		id: 6,
		nombre: "pizza con Anana",
		precio: 600,
		ingredientes: ["Muzzarella", "Tomate", "Anana"],
	},
];

let pizzaImpar = [];
let pizzaBarata = false;

pizzas.forEach((pizza) => {
	pizza.id % 2 != 0 ? pizzaImpar.push(pizza.nombre) : null;
	pizza.precio < 600 ? (pizzaBarata = true) : null;
	console.log(`La pizza ${pizza.nombre} tiene un precio de ${pizza.precio}.`);
	console.log(`Sus ingredientes son ${pizza.ingredientes}.`);
});

console.log(`Las pizzas impares son ${pizzaImpar}.`);
pizzaBarata
	? console.log("Existe una pizza menor a 600 pe.")
	: console.log(
			"No existe una pizza menor a 600 pe, pues hiperinflacion mi rey."
	  );
