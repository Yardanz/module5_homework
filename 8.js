let fruit = new Map([
    ["apple", "green"],
    ["banana", "yellow"],
    ["strawberry", "red"]
]);

fruit.forEach((value, key) => {
    console.log(`${key} - X, ${value} - Y`);
});