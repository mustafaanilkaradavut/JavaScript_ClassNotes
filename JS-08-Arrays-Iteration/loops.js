//! -------------------------------------------------------------------------- */
//?                                 FOR LOOP                                   */
//! -------------------------------------------------------------------------- */

//..        Example

console.log("*****  LOOPS IN ARRAYS  *****");

const salary = [50000, 35000, 120000, 44000];

let sum = 0;
for (let i = 0; i < salary.length; i++) {
  sum += salary[i];
  console.log(i, sum);
}
console.log("SUMMARY: ", sum);

//..        Example
//?     Notlar dizisindeki notların 50'den küçük olanları ve büyük olanları 2 ayrı diziye kaydediniz.

const exams = [50, 45, 67, 100, 10];

const underFifty = [];
const aboveFifty = [];

for (let i = 0; i < exams.length; i++) {
  if (exams[i] < 50) {
    underFifty.push(exams[i]);
  } else {
    aboveFifty.push(exams[i]);
  }
}

console.log(underFifty);
console.log(aboveFifty);
console.log(exams);

//..        Example         -           FOR IN

const nums = [50000, 35000, 120000, 44000];

let total = 0;
for (let i in nums) {
  total += nums[i];
}
console.log("AVG: ", total / nums.length);

//..        Example         -           FOR IN

//?     Notlar dizisindeki notların 50'den küçük olanları ve büyük olanları 2 ayrı diziye kaydediniz.

const exams2 = [50, 22, 33, 5, 99, 45, 67, 100, 10];

const underFiftyExams = [];
const aboveFiftyExams = [];

for (let i in exams2) {
  exams2[i] < 50
    ? underFiftyExams.push(exams2[i])
    : aboveFiftyExams.push(exams2[i]);
}

console.log(underFiftyExams);
console.log(aboveFiftyExams);
console.log(exams2);

//? low-level language example
//* deneme: mov a,b
//*         add R1,R2
//*         gjmp R1, deneme

//..        Example         -           FOR OF

const departments = [
  "St. Patrick",
  "St. Micheal",
  "St. Gabriel",
  "St.Philomenas",
];

const strArrayUpperCase = (ward) => {
  let upperCasedArray = [];

  for (const ward of departments) {
    upperCasedArray.push(ward.toUpperCase());
  }
  return upperCasedArray;
};

const myArray = strArrayUpperCase(departments);
console.log(myArray, departments);

/* -------------------------------------------------------------------------- */
//?     Example ;
//?     Öğrenciler dizisinde öğrenci isimleri saklanmaktadır. Öğrencileri aramımızı sağlayacak ve aranılan öğrenciden ne kadar sayıda bulunduğunu ana programa döndürek bir fonksiyon yazınız. Eğer aranılan isimde bir öğrenci yok ise fonksiyon "öğrenci bulunamadı döndürmelidir."
/* -------------------------------------------------------------------------- */

function searchStudent(students, nameOfStudent) {
  let eachNameOfStudent = 0;

  for (let i in students) {
    if (students[i] === nameOfStudent) {
      eachNameOfStudent++;
    }
  }
  if (eachNameOfStudent > 0) {
    return `The student name of ${nameOfStudent} has been finded. This name include ${eachNameOfStudent} times`;
  } else {
    return `The student name of ${nameOfStudent} has been not finded !!`;
  }
}

const students = [
  "robert",
  "christina",
  "aaron",
  "Helena",
  "robert",
  "christina",
  "robert"
];

const nameOfStudent = "robert";

const result = searchStudent(students, nameOfStudent);
console.log(result);
