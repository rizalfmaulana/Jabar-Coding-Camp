// soal 1
function jumlah_kata(s) {
  return s.trim().split(" ").length;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = "Saya Iqbal";
console.log(jumlah_kata(kalimat_1)); // 6
console.log(jumlah_kata(kalimat_2));
