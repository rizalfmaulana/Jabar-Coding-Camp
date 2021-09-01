// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var tiga = pertama.substring(0, 5);
var empat = pertama.substring(12, 19);
var lima = kedua.substring(0, 8);
var enam = kedua.substring(8, 18).toUpperCase();
var tujuh = tiga.concat(empat.concat(lima.concat(enam)));
console.log(tujuh);

// soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var one = Number(kataPertama);
var two = Number(kataKedua);
var three = Number(kataKetiga);
var four = Number(kataKeempat);

var hasil = (one - three + four) * two;
console.log(hasil);

// soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
