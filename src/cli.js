import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const sayHello = () => {
	console.log(`Hello, ${name}!`);
};
