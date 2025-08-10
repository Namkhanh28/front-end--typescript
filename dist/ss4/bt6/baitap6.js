const listProduct = [
    {
        id: "P001",
        name: "Laptop Asus",
        price: 20000000,
        category: {
            id: "C01",
            name: "Thiết bị điện tử"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Chuột không dây",
        price: 500000,
        category: {
            id: "C01",
            name: "Thiết bị điện tử"
        }
    },
    {
        id: "P003",
        name: "Bàn làm việc",
        price: 1500000,
        category: {
            id: "C02",
            name: "Nội thất"
        },
        discount: 5
    }
];
function displayProductInfo(product) {
    console.log(`Tên sản phẩm: ${product.name}`);
    console.log(`Giá: ${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`);
    console.log(`Danh mục: ${product.category.name}`);
    if (product.discount) {
        console.log(`Giảm giá: ${product.discount}%`);
    }
    else {
        console.log("Không có giảm giá");
    }
}
listProduct.forEach(product => {
    console.log("Thông tin sản phẩm:");
    displayProductInfo(product);
    console.log("-----------------------------");
});
export {};
//# sourceMappingURL=baitap6.js.map