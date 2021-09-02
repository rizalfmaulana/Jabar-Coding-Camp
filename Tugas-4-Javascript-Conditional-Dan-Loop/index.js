// soal 1
var nilai = 85;

if (nilai >= 85) {
  console.log("indeksnya A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("indeksnya B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("indeksnya C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("indeksnya D");
} else {
  console.log("indeksnya E");
}
console.log("==============================");

//soal 2
var tangggal = 15;
var bulan = 3;
var tahun = 1996;

switch (bulan) {
  case 1:
    console.log("15 Januari 1996");
    break;
  case 2:
    console.log("15 Februari 1996");
    break;
  case 3:
    console.log("15 Maret 1996");
    break;
  case 4:
    console.log("15 April 1996");
    break;
  case 5:
    console.log("15 Mei 1996");
    break;
  case 6:
    console.log("15 Juni 1996");
    break;
  case 7:
    console.log("15 Juli 1996");
    break;
  case 8:
    console.log("15 Agustus 1996");
    break;
  case 9:
    console.log("15 September 1996");
    break;
  case 10:
    console.log("15 Oktober 1996");
    break;
  case 11:
    console.log("15 November 1996");
    break;
  case 12:
    console.log("15 Desember 1996");
    break;
  default:
    break;
}
console.log("==============================");

// soal 3
var s = "";
for (i = 0; i < 7; i++) {
  for (j = 0; j < i; j++) {
    s += "#";
  }
  s += "\n";
}
console.log(s);
console.log("==============================");

// soal 4
const kata = ["Programming", "Javascript", "VueJS"];

let panjang = kata.length;
let index = 0;
let nomor = 1;
masukan = 10;
while (nomor <= masukan) {
  console.log(nomor + " - I love " + kata[index]);
  index += 1;
  nomor += 1;

  if (index == panjang) {
    console.log("=".repeat(nomor - 1));
    index = 0;
  }
}
