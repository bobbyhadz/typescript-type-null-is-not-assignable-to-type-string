export {};

// Type 'string | null' is not assignable to type string

// EXAMPLE 1 - Using the non-null assertion operator to solve the error

interface Employee {
  id: number;
  name: string | null;
}

const emp: Employee = {
  id: 1,
  name: 'Bobby Hadz',
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const name: string = emp.name!; // 👈️ non-null assertion
console.log(name);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// const name: string = emp.name as string; // 👈️ type assertion

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Using a type guard to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// const name: string = emp.name !== null ? emp.name : '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 4 - Using the nullish coalescing operator (??) to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// const name: string = emp.name ?? '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 5 - Using the logical OR (||) operator to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// const name: string = emp.name || '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 6 - Using an `if` statement to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// let name = '';

// if (emp.name !== null) {
//   name = emp.name;
// }

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 7 - Updating the type of the value to solve the error

// interface Employee {
//   id: number;
//   name: string | null;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// // 👇️ const name: string | null
// const name: string | null = emp.name;

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // Argument type 'string or null' not assignable to parameter of type string

// // EXAMPLE 8 - Using a non-null assertion to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const value = Math.random() > 0.5 ? 'hello' : null;

// getMessage(value!); // 👈️ non-null assertion

// ---------------------------------------------------

// // EXAMPLE 9 - Using a type assertion to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const value = Math.random() > 0.5 ? 'hello' : null;

// getMessage(value as string); // 👈️ type assertion

// ---------------------------------------------------

// // EXAMPLE 10 - Using a type guard to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const maybeString = Math.random() > 0.5 ? 'hello' : null;

// const message: string = maybeString !== null ? maybeString : '';

// getMessage(message);

// ---------------------------------------------------

// // EXAMPLE 11 - Using the nullish coalescing (??) operator to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const maybeString = Math.random() > 0.5 ? 'hello' : null;

// getMessage(maybeString ?? '');

// ---------------------------------------------------

// // EXAMPLE 12 - Using the logical OR (||) operator to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const maybeString = Math.random() > 0.5 ? 'hello' : null;

// getMessage(maybeString || '');

// ---------------------------------------------------

// // EXAMPLE 13 - Updating the type of the function's parameter to solve the error

// // 👇️ parameter is type string or null
// function getMessage(message: string | null) {
//   return message;
// }

// // 👇️ argument is also type string or null
// const maybeString = Math.random() > 0.5 ? 'hello' : null;

// getMessage(maybeString);

// ---------------------------------------------------

// // Type 'null' is not assignable to type in TypeScript

// // EXAMPLE 14 - Using a union type to solve the error

// function getObj(): Record<string, string> | null {
//   if (Math.random() > 0.5) {
//     return null;
//   }
//   return { name: 'Bobby Hadz' };
// }

// ---------------------------------------------------

// // EXAMPLE 15 - Use a type guard to check if the property is not `null`

// interface Person {
//   // 👇  using union
//   name: string | null;
// }

// const obj: Person = { name: 'Bobby Hadz' };

// if (obj.name !== null) {
//   // ✅ Now obj.name is string
//   console.log(obj.name.toLowerCase());
// }
