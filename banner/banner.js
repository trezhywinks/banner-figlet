//  _                               __ _      _     _   
// | |__  __ _ _ _  _ _  ___ _ _   / _(_)__ _| |___| |_ 
// | '_ \/ _` | ' \| ' \/ -_) '_| |  _| / _` | / -_)  _|
// |_.__/\__,_|_||_|_||_\___|_|   |_| |_\__, |_\___|\__|
//                                      |___/           
                                             
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


