//聲明一個變量a,同時指定他的類型為number
let a: number;
//a的類型設置為number，在以後的使用過程中a的值只能是數字
a = 10;
a = 33;
// a = 'hello'; //此行代碼會報備，因為變量a的類型是number，不能賦值字符串
let b: string;
b = 'hello';
// b = 123;

//聲明完變量直接進行賦值
//let c : boolean = false;

//如果變量的聲明和賦值是同時進行的，TS可以自動對變量進行類型檢測
let c = false;
c = true;

// //JS中的兩數是不考慮參數的類型和個數的
// function sum(a,b) {
//     return a+b;
// }

// //console.log(sum( 123, 456));; //579
// console.log(sum( "123", "456"));; //123456

function sum(a :number, b:number) : number {
    return a + b;
}

let result =  sum(123, 456 );
