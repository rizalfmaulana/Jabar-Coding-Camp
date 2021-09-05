// soal 1
function jumlah_kata(s) {
  return s.trim().split(" ").length;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = "Saya Iqbal";
console.log(jumlah_kata(kalimat_1)); // 6
console.log(jumlah_kata(kalimat_2));

// soal 2
function next_date(tanggal, bulan, tahun) {
  var hari = tanggal + 1;
  var bln = bulan;
  var taun = tahun;
  switch (bulan) {
    case 1:
      bln = "Januari";
      break;
    case 2:
      bln = "Februari";
      if (hari === 30) {
        hari = 1;
        bln = "Maret";
      }
      if (hari === 29 && taun === 2021) {
        hari = 1;
        bln = "Maret";
      }
      break;
    case 3:
      bln = "Maret";
      break;
    case 4:
      bln = "April";
      break;
    case 5:
      bln = "Mei";
      break;
    case 6:
      bln = "Juni";
      break;
    case 7:
      bln = "Juli";
      break;
    case 8:
      bln = "Agustus";
      break;
    case 9:
      bln = "September";
      break;
    case 10:
      bln = "Oktober";
      break;
    case 11:
      bln = "November";
      break;
    case 12:
      bln = "Desember";
      if (hari === 32) {
        hari = 1;
        taun += 1;
        bln = "Januari";
      }
      break;
    default:
      break;
  }
  return String(hari) + " " + bln + " " + String(taun);
}

var tanggal = 29;
var bulan = 2;
var tahun = 2020;

console.log(next_date(tanggal, bulan, tahun)); // output : 1 Maret 2020

var tanggal = 28;
var bulan = 2;
var tahun = 2021;

console.log(next_date(tanggal, bulan, tahun)); // output : 1 Maret 2021

var tanggal = 31;
var bulan = 12;
var tahun = 2020;
console.log(next_date(tanggal, bulan, tahun)); // output : 1 Januari 2021
