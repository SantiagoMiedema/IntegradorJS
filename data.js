const productsData = [
    {
        id: 1,
        name: "Teclado gamer Redragon Kumara K552 QWERTY Cherry MX Blue color negro con luz roja",
        category: "teclados",
        cardImg: "./products/kumara.webp",
        price: 24999,
    },
    {
        id: 2,
        name: "Teclado gamer Logitech Serie G Prodigy G213 QWERTY español color negro con luz RGB",
        category: "teclados",
        cardImg: "./products/tecladologitech.webp",
        price: 23499,
    },
    {
        id: 3,
        name: "Teclado gamer T-Dagger Bora T-TGK315 QWERTY T-Dagger Red español color negro con luz RGB",
        category: "teclados",
        cardImg: "./products/tecladotdagger.webp",
        price: 15000,
    },
    {
        id: 4,
        name: "Mouse gamer Logitech Pro Series G Pro Hero negro",
        category: "mouse",
        cardImg: "./products/mouselogitech.webp",
        price: 20299,
    },
    {
        id: 5,
        name: "Mouse gamer Redragon Centrophorus2 M601-RGB black",
        category: "mouse",
        cardImg: "./products/mouseredragon.webp",
        price: 7099,
    },
    {
        id: 6,
        name: "Mouse gamer HyperX Pulsefire FPS Pro negro",
        category: "mouse",
        cardImg: "./products/mousehx.webp",
        price: 27300,
    },
    {
        id: 7,
        name: "Auriculares gamer Logitech G Series G432 black",
        category:"auriculares" ,
        cardImg:"./products/auriculareslogitech.webp" ,
        price: 36000,
    },
    {
        id: 8,
        name:"Auriculares gamer Redragon Zeus X H510-RGB negro con luz rgb" ,
        category:"auriculares" ,
        cardImg: "./products/auricularesredragon.webp",
        price: 29999,
    },
    {
        id: 9,
        name: "Auriculares gamer HyperX Cloud Stinger HX-HSCS negro",
        category:"auriculares" ,
        cardImg: "./products/auriculareshx.webp",
        price: 23999,
    },
    {
        id: 10,
        name: "Monitor gamer Samsung F24T35 led 24 pulgadas azul y gris oscuro 100V/240V",
        category: "monitores",
        cardImg: "./products/monitor75hz.webp",
        price: 59000,
    },
    {
        id: 11,
        name:"Monitor Gamer 24 Led Samsung G50 Full Hd Curvo 144hz 4ms" ,
        category: "monitores",
        cardImg:"./products/monitor144hz.webp" ,
        price: 93500,
    },
    {
        id: 12,
        name: "Monitor Philips Led 24 Pulgadas 241v8l/77 Hdmi Vga",
        category: "monitores",
        cardImg: "./products/monitorphilips.webp",
        price: 51000,
    },
    {
        id: 13,
        name: "Kit Microfono Omnidireccional Soporte Brazo Antipop Araña 2",
        category: "microfonos",
        cardImg: "./products/microfonobm800.webp",
        price: 15000,
    },
    {
        id: 14,
        name: "Micrófono Redragon BLAZAR GM300 condensador cardioide negro",
        category:"microfonos" ,
        cardImg: "./products/microfonoredragon.webp",
        price: 29999,
    },
    {
        id: 15,
        name: "Micrófono Shure MV7X dinámico cardioide negro",
        category: "microfonos",
        cardImg: "./products/microfonoshure.webp",
        price: 124000,
    },
    {
        id: 16,
        name: "Webcam Camara Web Para Pc Full Hd 1080p Con Microfono Noga E",
        category:"webcams" ,
        cardImg: "./products/webcamnoga.webp",
        price: 4500,
    },
    {
        id: 17,
        name: "Cámara web Logitech C920e Full HD 30FPS color negro",
        category: "webcams",
        cardImg: "./products/webcamlogitech.webp",
        price: 29999,
    },
    {
        id: 18,
        name:"Cámara web Redragon Fobos GW600 HD 30FPS color negro" ,
        category:"webcams" ,
        cardImg: "./products/webcamredragon.webp",
        price: 13999,
    },
    
];

const appState ={
    activeFilter: null,
};