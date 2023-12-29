export {};

//共用型の制約を強くする（順序を決める）
let profile: [string, number] = ['Ham', 43];
//profile = [43, 'Ham'];//要素を逆にする
console.log(profile);