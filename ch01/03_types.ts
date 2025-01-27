//也可以直接使用字面量進行類型聲明
let a :10;
a =10;

//可以使用 | 來連接多個類型
let b:"male" | "female";
b = "male";
b = "female";

let c :boolean | string;
c = true;
c = "hello";

//any 表示任意類型，一個變量設置類型為any後相當於該對變量關閉了TS的類型檢測
//使用TS時，不建議使用any類型
//let d : any;

//聲明變量如果不指定類型，則TS解析器會自動判斷變量的類型為any (隱式的any)
let d ;
d = 10;
d = "hello";
d = true;

//unknown 表示未知類型的值
let e : unknown;
e = 10;
e = "hello";
e = true;

let s :string;

//d的類型是any，它可以賦值給任何變量
//s = d;

e= "hello";

//unknown 實際上就是一個類型的安全any
//unknown 類型的變量，不能直接賦值給其他變量
if (typeof e =="string") {
    s= e;
}

//類型的斷言，可以用來告訴解析器變量的實際類型
/*
*   語法
*       變量 as 類型  
*       <類型> 變量
*/
s= e as string;
s= <string>e ;

// function fn() : number{
//     return 123;
// }

// function fn() : boolean{
//     return true;
// }

// function fn(num){
//     if (num > 0) {
//         return true;
//     } else {
//         return 123;
//     }
// }

//void 用來表示空 ，以函數為例，就表示沒有返回值的函數
function fn() : void{
}


//never 表示永遠不會返回結果
function fn2() : never{
    throw new Error('報錯了!');
}
