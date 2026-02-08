let inventory = [
    {
        SKU: "SKU-6001000",
        productName: "Desktop Table",
        price: 512.72,
        stock: 65,
    },
    {
        SKU: "SKU-6001001",
        productName: "Pink glasses",
        price: 15.36,
        stock: 236,
    },
    {
        SKU: "SKU-6001002",
        productName: "Picture frame",
        price: 23.99,
        stock: 384,
    },
    {
        SKU: "SKU-6001003",
        productName: "Vanity Mirror",
        price: 37.25,
        stock: 469,
    }
];

//One line Summary For Initial Inventory
inventory.forEach((inventory) =>
    console.log(`${inventory.SKU} | ${inventory.productName} | $${inventory.price} | ${inventory.stock}`)
);

//New product
inventory.push({
    SKU: "SKU-6001004",
    productName: "Toothbrush",
    price: 7.51,
    stock: 633,
});

//Last product removed and log it 
console.log("Product removed:", inventory.pop());

//Product price update
let saleProductName = inventory[1].productName;
let oldPrice = inventory[1].price;
let salePrice = inventory[1].price *= (1 - 0.35);
console.log(`!!BIG SALE!! \n${saleProductName} price have been decreased to \n$${salePrice.toFixed(2)} from ${oldPrice} just for today`);

//Product Stock update
let restockProdName = inventory[2].productName;
let oldStock = inventory[2].stock;
let newStock = inventory[2].stock += 400;
console.log(`!!Restock!! \nthe product ${restockProdName} have been restocked to ${newStock} from ${oldStock}`)

