const productsData = [
    {
        id: 1,
        name: "Teclado Kumara K552",
        category: "teclados", 
        cardImg: "./assets/products/kumara.jpg",
        price: 24999,
    },
    {
        id: 2,
        name: "Teclado Logitech Prodigy",
        category: "teclados" ,
        cardImg: "./assets/products/tecladologitech.jpg",
        price: 23499,
    },
    {
        id: 3,
        name: "Teclado T-Dagger Bora",
        category: "teclados",
        cardImg: "./assets/products/tecladotdagger.jpg",
        price: 15000,
    },
    {
        id: 4,
        name: "Mouse Logitech G Pro Hero",
        category: "mouse",
        cardImg: "./assets/products/mouselogitech.jpg",
        price: 20299,
    },
    {
        id: 5,
        name: "Mouse Redragon Centrophorus2",
        category: "mouse",
        cardImg: "./assets/products/mouseredragon.jpg",
        price: 7099,
    },
    {
        id: 6,
        name: "Mouse HyperX Pulsefire Pro",
        category: "mouse",
        cardImg: "./assets/products/mousehx.jpg",
        price: 27300,
    },
    {
        id: 7,
        name: "Auriculares Logitech G Series",
        category:"auriculares" ,
        cardImg:"./assets/products/auriculareslogitech.jpg" ,
        price: 36000,
    },
    {
        id: 8,
        name:"Auriculares Redragon Zeus" ,
        category:"auriculares" ,
        cardImg: "./assets/products/auricularesredragon.jpg",
        price: 29999,
    },
    {
        id: 9,
        name: "Auriculares HyperX Cloud Stinger",
        category:"auriculares" ,
        cardImg: "./assets/products/auriculareshx.jpg",
        price: 23999,
    },
    {
        id: 10,
        name: "Monitor Samsung 24 75hz",
        category: "monitores",
        cardImg: "./assets/products/monitor75hz.jpg",
        price: 59000,
    },
    {
        id: 11,
        name:"Monitor 24 Samsung 144hz" ,
        category: "monitores",
        cardImg:"./assets/products/monitor144hz.jpg" ,
        price: 93500,
    },
    {
        id: 12,
        name: "Monitor Philips Led 24 60hz",
        category: "monitores",
        cardImg: "./assets/products/monitorphilips.jpg",
        price: 51000,
    },
    {
        id: 13,
        name: "Kit Microfono Soporte Brazo",
        category: "microfonos",
        cardImg: "./assets/products/microfonobm800.jpg",
        price: 15000,
    },
    {
        id: 14,
        name: "Micrófono Redragon BLAZAR",
        category:"microfonos" ,
        cardImg: "./assets/products/microfonoredragon.jpg",
        price: 29999,
    },
    {
        id: 15,
        name: "Micrófono Shure MV7X",
        category: "microfonos",
        cardImg: "./assets/products/microfonoshure.jpg",
        price: 124000,
    },
    {
        id: 16,
        name: "Webcam Camara Web 1080p Noga",
        category:"webcams" ,
        cardImg: "./assets/products/webcamnoga.jpg",
        price: 4500,
    },
    {
        id: 17,
        name: "Cámara web Logitech C920 30FPS",
        category: "webcams",
        cardImg: "./assets/products/webcamlogitech.jpg",
        price: 29999,
    },
    {
        id: 18,
        name:"Cámara web Redragon Fobos 30FPS " ,
        category:"webcams" ,
        cardImg: "./assets/products/webcamredragon.jpg",
        price: 13999,
    },
    
];

const divideProductsInParts = (size) => {
	let productsList = [];
	for (let i = 0; i < productsData.length; i += size) {
		productsList.push(productsData.slice(i, i + size));
	}
	return productsList;
};

const appState ={
    products : divideProductsInParts(6),
    currentProductsIndex: 0,
    productsLimit: divideProductsInParts(6).length,
    activeFilter: null,
};