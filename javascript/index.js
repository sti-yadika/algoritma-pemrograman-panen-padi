const prompt = require("prompt-sync")();

const umur = parseInt(prompt("masukan umur padi (bulan)\t: "));
const kuning =
  prompt("apakah warna padi kuning?\n> ketik (y/n)\t> ").toLowerCase() === "y"
    ? true
    : false;

if (umur >= 3 && kuning) console.log("Padi siap panen :)");
else console.log("Padi belum siap panen :(");

console.log("akhir dari program");
