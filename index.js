import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();

const name1 = process.env.NAME1;
const name2 = process.env.NAME2;
const name3 = process.env.NAME3;
const name4 = process.env.NAME4;

console.log(chalk.blue(`Salut la team ${name1}`));
console.log(chalk.red(`${name2}`));
console.log(chalk.green(`${name3}`));
console.log(chalk.yellow(`${name4}`));
