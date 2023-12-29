export {};

let profile1:object = { name: 'Han' } ;
profile1 = { birthYear: 1976 };

let profile2: {
  name: string;
} = { name: 'Han' };
//profile2 = { birthYear: 1976 }; →エラーが出る
profile2 = { name: 'Nimo' }; //nameなら上書きできる