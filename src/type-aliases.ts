export {};

type Mojiretsu = string;

const fooString : string ='Hello';
const fooMojiretsu : Mojiretsu ='Hello'; //string型

//やり方1
const example1 = {
  name: 'Ham',
  age: 43
};
type Plofile = {
  name: string;
  age: number;
};
const example2:Plofile  = {
  name: 'Ham',
  age: 43
};

//やり方2(推奨)
type Plofile2 = typeof example1;