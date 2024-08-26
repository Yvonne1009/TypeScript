//object 表示一個 js對象
var a;
a = {};
a = function () {
};
//{}用來指定對象中可以包含哪些屬性
// 語法:{屬性名:屬性值;屬性名:屬性值};
//在屬性名後邊加上?，表示屬性是可選的
var b;
b = { name: '孫悟空', age: 18 };
//[propName:string]:any 表示任意類型的屬性
var c;
c = { name: '豬八戒', age: 18, gender: '男' };
/**
 *  設置函數結構的類型聲明:
 *      語法:(形參:類型, 形參:類型...)=>返回值
 */
var d;
// d = function (n1:string, n2 :string): number {
//     return 10;
// }
/**
 *   數組的類型聲明
 *      類型[]
 *      Array<類型>
 */
//string[] 表示字符串數組
var e;
e = ['a', 'b', 'c', 'd'];
//nuber[] 表示數值數值
var f;
var g;
g = [1, 2, 3];
/**
 *  元組，元組就是固定長度的數組
 *      數組:[類型,類型,類型]
 */
var h;
h = ['hello', 123];
/**
 * enum 枚舉
 */
// let i :{name:string , gender:string};
// i ={
//     name: '孫悟空',
//     gender : '男'
// }
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孫悟空',
    gender: Gender.Male //'male'
};
// console.log(i.gender === Gender.Male);
//& 表示同時
var j;
var k;
var l;
var m;
k = 2;
