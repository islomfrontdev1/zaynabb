let letterSearch = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

// n harfi qatnashgan so'zlar uchun massiv
let wordsWithN = letterSearch.filter(word => word.toLowerCase().includes('n'));

// n harfi qatnashmagan so'zlar uchun massiv
let wordsWithoutN = letterSearch.filter(word => !word.toLowerCase().includes('n'));

// Natijalarni console.log da chiqarish
console.log(3, wordsWithN, "n harfi ishtirok etgan sozlar");
console.log(4, wordsWithoutN, "n harfi ishtirok etmagan sozlar");