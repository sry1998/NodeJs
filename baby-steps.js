//console.log(process.argv);
let sum = 0;
for (let i = 2; i <= process.argv.length - 1; i++) {
	sum = sum + (+process.argv[i]);
}
console.log(sum);
