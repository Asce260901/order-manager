let inventory = [
    {
        sku: "SKU-6001000",
        productName: "Desktop Table",
        price: 512.72,
        stock: 65,
    },
    {
        sku: "SKU-6001001",
        productName: "Pink glasses",
        price: 15.36,
        stock: 236,
    },
    {
        sku: "SKU-6001002",
        productName: "Picture frame",
        price: 23.99,
        stock: 384,
    },
    {
        sku: "SKU-6001003",
        productName: "Vanity Mirror",
        price: 37.25,
        stock: 469,
    }
];

//One line Summary For Initial Inventory
inventory.forEach((inventory) =>
    console.log(`${inventory.sku} | ${inventory.productName} | $${inventory.price} | ${inventory.stock}`)
);

//New product
inventory.push({
    sku: "SKU-6001004",
    productName: "Toothbrush",
    price: 7.51,
    stock: 633,
});

//Last product removed and log it 
console.log("Product removed:", inventory.pop());

//Product price update
let saleProductName = inventory[1].productName;
let oldPrice = inventory[1].price;
let salePrice = inventory[1].price *= (1 - 0.45);
console.log(`!!BIG SALE!! \n${saleProductName} price have been decreased to \n$${salePrice.toFixed(2)} from ${oldPrice} just for today`);
inventory[1].price = salePrice
//Product Stock update
let restockProdName = inventory[2].productName;
let oldStock = inventory[2].stock;
let newStock = inventory[2].stock += 400;
console.log(`!!Restock!! \nthe product ${restockProdName} have been restocked to ${newStock} from ${oldStock}`)
inventory[2].stock = newStock

// Orders
let orders = [
    {
        orderId: "ORD-7001000",
        items:[
            {sku: "SKU-6001000", quantity:70},
            {sku: "SKU-6001003", quantity:12}
        ]
    },
    {
        orderId: "ORD-7001001",
        items:[
            {sku: "SKU-6001002", quantity:300},
            {sku: "SKU-6001001", quantity:200}
        ]
    },
    {
        orderId: "ORD-7001002",
        items: [
            {sku: "SKU-6001004", quantity:52},
            {sku: "SKU-6001002", quantity:12}
        ]
    }
];

//Product finder by SKU function 
function findproductsBySku(sku){
    let product = inventory.find((p) => p.sku === sku);
    return product ? product: null;
}

//Function for order processing
function processOrder(order){
    for (let item of order.items){
        let product = findproductsBySku(item.sku);

        if (!product){
            return `Order ${order.orderId} cannot be completed: SKU ${item.sku} not found in inventory.`;
        }
        if (product.stock < item.quantity){
            let deficit = item.quantity - product.stock
            return `Order ${order.orderId} cannot be completed: Product ${product.productName} is short by ${deficit} unit(s).`;
        }
    }
        for (let item of order.items){
            let product = findproductsBySku(item.sku);
            
            product.stock -= item.quantity;
            total = product.price * item.quantity;
        }
        return `Order ${order.orderId} has been completed: Order total = $${total.toFixed(2)}`;
}

//Orders result
console.log(`Order Processing`);
orders.forEach((order) =>{
    let result = processOrder(order);
    console.log(result);
});

//Reamining stock
console.log(`Remaining stock after orders`);
inventory.forEach((p) => {
    console.log(`${p.sku} | ${p.productName} | $${p.price} | Stock: ${p.stock}`);
});

//Total inventory value
let totalInventoryValue = inventory.reduce((sum,p) => sum + p.price * p.stock, 0);
console.log(`Total Inventory Value: $${totalInventoryValue.toFixed(2)}`);

//Low stock items less than 50 units
let lowStockItems = inventory.filter((p) => p.stock <=50);
lowStockItems.forEach((p) => console.log(`Low Stock Item: ${p.sku} | ${p.productName} | ${p.stock}`));
