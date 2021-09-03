// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

daftarHewan.sort();
daftarHewan.forEach((item) => console.log(item));

console.log("==================");

// soal 2
var data = { name: "Rizal", age: 25, address: "Griya Bandung Indah D7 No 17", hobby: "Gaming" };
function introduce(d) {
  return "Nama saya " + d.name + ", umur saya " + d.age + "tahun, alamat saya di " + d.address + ", dan saya punya hobby yaitu " + d.hobby + "!";
}

var perkenalan = introduce(data);
console.log(perkenalan);
console.log("==================");

// soal 3
var hitung_1 = hitung_huruf_vokal("Muhammad");

var hitung_2 = hitung_huruf_vokal("Iqbal");

function hitung_huruf_vokal(str) {
  var vokal = "aiueoAIUEO";
  var jumlah = 0;

  for (i = 0; i < str.length; i++) {
    if (vokal.indexOf(str[i]) !== -1) {
      jumlah += 1;
    }
  }
  return jumlah;
}

console.log(hitung_1, hitung_2);
console.log("==================");
// soal 4
function hitung(n) {
  return (n - 1) * 2;
}

console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(5)); // 8
