const arr7 = [1, 2, 3, 0, 'ежик', undefined];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr7.length; i++) {
    if (typeof arr7[i] === "number" || !isNaN(arr7[i])) {
        numbercount += 1;
        if (arr7[i] === 0) {
            zerocount += 1;
        } else if (arr7[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`Итого: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных.`);