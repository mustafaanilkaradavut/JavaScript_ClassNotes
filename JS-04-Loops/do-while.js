/* -------------------------------------------------------------------------- */
/*                      JavaScript Loops    - Do - While                      */
/* -------------------------------------------------------------------------- */

console.log("***** DO-WHILE *****");

//?     Example 1

// let tool = 12;
// do {
//   console.log("Cohort16", tool);
//   tool++;
//   console.log(tool);
// } while (tool <= 10);

console.log("Loop Finish");

//?     Example 2

let run = ""; //__ Burada dşarı yazdık çünkü "while" döngüsü "do" döngüsünün dışarısında kalmaktadır.
do {
  let firstExam = Number(prompt("Please enter first exam score"));
  let secondExam = Number(prompt("Please enter second exam score"));
  let avarage = firstExam * 0.3 + secondExam * 0.7;

  const result =
    avarage >= 50
      ? `${avarage} score : Pass `
      : `${avarage} score : Repetition`;
  console.log(result);

  run = prompt("Do you want to continue calculate? Y/y");
} while (run === "y" || run === "Y");
console.log("Shut down application");  //* Loop is break if user enter different letter from E.

//!     "?"  Varsa.             ":" Yoksa/Değilse.

//?     Example 3   (Alternative While Solution)

// let run = "";
// while (true) {
//   let firstExam = Number(prompt("Please enter first exam score"));
//   let secondExam = Number(prompt("Please enter second exam score"));
//   let avarage = firstExam * 0.3 + secondExam * 0.7;

//   const result =
//     avarage >= 50 ? `${avarage} score: Pass` : `${avarage} score: Repetition`;
//   console.log(result);
//   run = prompt("Do you want to continue calculate? Y/y").toLowerCase;
//   if (run !== "y") {
//     break;
//   }
// }
