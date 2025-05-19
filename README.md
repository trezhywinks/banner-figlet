# Banner - Figlet font: small

```ts
// npm install figlet or git clone  https... && npm install .
const figlet = require("figlet");
const readline = require("readline");

const trezhy = readline.createInterface({
input: process.stdin,
output: process.stdout
});

trezhy.question('[=] your name: ', (input) => {
figlet.text(input, {font:'Small'}, (data, err) =>{
if(err){
console.log(err);
}
})
trezhy.close();
});

```
