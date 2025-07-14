let str = "Swift";
let sub = str.slice(str.length - 3, str.length);
console.log(sub);
str = sub + str + sub;
console.log(str);
