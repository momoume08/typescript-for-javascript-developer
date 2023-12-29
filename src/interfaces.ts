export {};

//objectのやり方
type ObjectType = {
  name: string;
  age: number
};
//let object: ObjectType = {
//  name: 'Ham-san',
//  age: 43
//};

//interfaceのやり方
interface ObjectInterface {
  name: string;
  age: number
};
let object: ObjectInterface = {
  name: 'Ham-san',
  //name: true, //→エラーが出る
  age: 43
};