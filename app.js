// lý thuyết
// 1 biến chay i có tác dụng kiểm soát vòng lặp
// 2 for sửa dụng cho vòng lặp có biết trước
//   while sử dụng cho vòng lặp ko biết trước kết thúc
// khi biết trước dùng for
// chưa biết dùng ưhile


// bài tập
// câu 1
// let a = Number(prompt('nhập số nguyên a'));
// let b = 0;
// if (Number.isInteger(a)) {
//     alert('a hợp lệ');
//     for ( let i = 1; i <= a; i++) {
//         b = b + i;
//     } alert(b);
// } else {
//     alert('mời nhập lại');
// }

// câu 2
// let a = Number(prompt('nhập số nguyên a'));
// let b = 1;
// if (Number.isInteger(a)) {
//     alert('a hợp lệ');
//     for ( let i = 1; i <= a; i++) {
//         b = b * i;
//     } alert(b);
// } else {
//     alert('mời nhập lại');
// }


// câu 3
// let a = Number(prompt('nhập số nguyên a'));
// let b = 1;
// if (Number.isInteger(a)) {
//     alert('a hợp lệ');
//     for ( let i = 2; i <= a; i++) {
//         b = b + (1/i);
//     } alert(b);
// } else {
//     alert('mời nhập lại');
// }


// câu 4
// let a = Number(prompt('nhập số nguyên a'));
// let b = 0;
// if (Number.isInteger(a)) {
//     alert('a hợp lệ');
//     for ( let i = 1; i <= a; i++) {
//         b = b + (1/(i*(i + 1)));
//     } alert(b);
// } else {
//     alert('mời nhập lại');
// }


// câu 5
// let n = Number(prompt('nhập số n'))
// if (Number.isInteger(n)) {
//     alert('n hợp lệ')
//     for (let i = 0; i <= 10; i++) {
//         let b = n * i;
//         console.log(`${n} x ${i} = ${b}`);
//     }
// } else {
//     alert('n ko hợp lệ');
// }


// câu 6
// let n = Number(prompt('nhập số n'));
// let a = 0;
// let b = 1;
// let c;
// let e = '';
// if (Number.isInteger(n)) {
//     alert('a hợp lệ');
//     for (let i = 1; i <= n; i++) {
//         e += `${a},`;
//         c = a + b;
//         a = b;
//         b = c;
//     }console.log(e);
// } else {
//     alert('a ko hợp lệ')
// }

// câu 7
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ')
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0){
//             console.log(i + ' - chẵn');
//         }else if (i % 2 ===1) {
//             console.log(i + ' - lẻ');
//         }
//     }
// } else {
//     alert('n ko hợp lệ');
// }


// câu 8
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0){
//             console.log(i + ' - chẵn');
//         }
//     }
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 1){
//             console.log(i + ' - lẻ');
//         }
//     }
// } else {
//     alert('n ko hợp lệ');
// }

// //câu 9
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n là số hợp lệ')
//     for (let i = 2; i <= n; i++) {
//         if (i==2&&i==3&&i==5&&i==7){
//             console.log(i);
//         }else if () {
//         }else if (i%2==0&&i%3==0&&i%5==0&&i%7==0) {
//             console.log(i)
//         }
//     }
// }


// câu 10
// a
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = 0; i <= n; i ++){
//         let a = "";
//         for (let j = 0; j <= i; j++){
//             a = a + "*"
//         }
//     console.log(a);
//     }
// }else {
//     alert('n ko hợp lệ')
// }

// b
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = n; i >= 0; i --){
//         let a = "";
//         for (let j = 0; j <= i; j++){
//             a = a + "*"
//         }
//     console.log(a);
//     }
// }else {
//     alert('n ko hợp lệ')
// }

// c
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = 0; i <= n; i ++){
//         let a = "";
//         for (let j = 0; j <= i; j++){
//             a = a + j
//         }
//     console.log(a);
//     }
// }else {
//     alert('n ko hợp lệ')
// }

// d
// let n = Number(prompt('nhập số n'));
// if (Number.isInteger(n)) {
//     alert('n hợp lệ');
//     for (let i = n; i >= 0; i --){
//         let a = "";
//         for (let j = 0; j <= i; j++){
//             a = a + j
//         }
//     console.log(a);
//     }
// }else {
//     alert('n ko hợp lệ')
// }


// câu 11
let e = 0;
for (let i = 0; i < 1000; i++){
    if (i % 7 === 0){
        console.log(i);
        for(let j = 0;j < 30; j++){
            e += i;
        }
    }
}console.log(e);

// EX2:
// Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// Giải:

// const number = parseInt(prompt('Mời bạn nhập số nguyên dương'));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// // console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {
//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
