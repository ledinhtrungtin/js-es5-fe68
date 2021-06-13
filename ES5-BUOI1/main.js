console.log('Hello World');



// alert('My home')


/**
 * Biến và kiểu dữ liệu
 * - Kiểu nguyên thủy (primitive type): string, number, boolean, undefined, null, bigint, symbol
 * - null là kiểu object => bug
 * - Còn lại là object
 * - Dynamic type
 * - Đặt tên biến theo kiểu camelCase (lạc đà) và biến phải có ý nghĩa
 * - Không bắt đầu bằng số và không được chứa kí tự đặt biệt ngoại trừ dấu gạch dưới
 * - Không đặt tên biến có khoảng trắng
 * - Không đặt tên biến trùng với các keywords của JS vd: is, else, fuction, var, getBy....
 * - Hằng số (constant): 
 *      + Lưu trữ  những giá trị không bao giờ thay đổi
 *      + Không thể gắn lại giá trị mới được
 *      + Bắt buộc là phải gắn giá trị ngay lúc khởi tạo biến
 *      + Khai báo hằng số nên viết IN_HOA
 *      + 
 */

var fullName = 'Dinh Tin';
console.log(typeof fullName);

var age = 18; //number
console.log(typeof age);

age = '18'
console.log(typeof age);

var isStudent = false; //boolean
console.log(typeof isStudent );

var height; //undefiend
console.log(typeof height);

var weight = null; //object => bug
console.log(typeof weight);

const PI = 3.14;


/**
 * Câu lệnh điều kiện
 * - if
 * - if else
 * - else if
 * - switch case
 * - ==: so sánh giá trị
 * - ===: so sánh giá trị và kiểu dữ liệu
 */

//so sánh
console.log(3 === 3); //true
console.log(3 === '3'); //false

// if else
var isGirl = false;

if (isGirl == true) {
    console.log('Hi Girl')
}else{
    console.log('Hi Boy');
}

var isAdult = false;

if (isAdult) {
    console.log('You can access this page!');
}else{
    console.log('FBI warning!');
}

//else if
var trafficLight = 'abc';

if (trafficLight == 'green') {
    console.log('GO');
}else if (trafficLight == 'yellow') {
    console.log('SLOW');
}else if (trafficLight == 'red') {
    console.log('STOP');
}else {
    console.log('BYE BYE');
}


//Biểu thức điều kiện (LOGICAL OPERATOR)
var A = true;
var B = false;

console.log(A && B); //false
console.log(A || B); //true
console.log(!(!A || B));

/**
 * Hàm (function)
 * - 3 loại: delaration func, expression func, arrow func (es6)
 * - Hàm không tham số, không có giá trị trả về
 * - Hàm có tham số, không có giá trị trả về
 * - Hàm có tham số, có giá trị trả về
 * - Tên fuction phải có ý nghĩa và bắt đầu bằng động từ
 */

//delaration
function sayHelloToSomeone(name) {
    console.log('Hello ' + name);
}


//Hàm có tham số, có giá trị trả về
function calculateGPA(score1, score2, score3) {
    var gpa = (score1 + score2 + score3) /3;
    return gpa;

}



//Gọi hàm
sayHelloToSomeone('Tin');
var _gpa = calculateGPA(10,9,10)
console.log(_gpa);


