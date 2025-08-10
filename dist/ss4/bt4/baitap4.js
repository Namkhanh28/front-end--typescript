function handleUnionType(value) {
    if (typeof value === 'string') {
        console.log(`"${value}" có ${value.length} ký tự`);
    }
    else if (typeof value === 'number') {
        if (value % 2 === 0) {
            console.log(`Đây là số chẵn`);
        }
        else {
            console.log(`Đây là số lẻ`);
        }
    }
    else {
        console.log("Kiểu dữ liệu không hợp lệ");
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(7);
export {};
//# sourceMappingURL=baitap4.js.map