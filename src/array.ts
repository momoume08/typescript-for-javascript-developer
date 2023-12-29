export {};

//array型1
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['Tokyo', 'Osaka', 'Kyoto'];

//array型2(非推奨)
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

//２次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

//共用型
let hairetsu: (string | number | boolean)[]  = [1, false, 'Japan'];// |→or

console.log(numbers);
console.log(strings);
console.log(numbers2);
console.log(strings2);
console.log(nijigenHairetsu);
console.log(hairetsu);