/* -------------------------------------------------------------------------- */
//..                            hesapmakinesi.JS                              */
/* -------------------------------------------------------------------------- */

//?             dışarıya açılıyor.  Export oluyor.
//?             named export
// export const add = (a, b) => a + b
// export const sub = (a, b) => a - b
// export const mul = (a, b) => a * b
// export const div = (a, b) => a / b

const add = (a, b) => a + b;
const sup = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

//? named export (toplu şekilde export etme yöntemidir.)
export { add, sub, div, mul };

export const PI = 3.14;

const primeNumbers = [2, 3, 5, 7, 13];

//? default export (sadece bir kere kullanılır.)
const message = () => {
  console.log("End of Module");
};

export default message;
