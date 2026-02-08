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