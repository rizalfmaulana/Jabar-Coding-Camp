// soal 1
const luas = (a, b) => {
  let panjang = a;
  let lebar = b;

  return panjang * lebar;
};

const keliling = (c, d) => {
  let panjang = c;
  let lebar = d;

  return 2 * (panjang + lebar);
};

console.log(luas(2, 4));
console.log(keliling(2, 4));
console.log("==================================");

// soal 2
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

console.log(newFunction("William", "Imoh").fullName());
console.log("==================================");

//soal 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = newObject;
console.log(firstName, lastName, address, hobby);
console.log("==================================");

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);
console.log("==================================");

// soal 5
const planet = "earth";
const view = "glass";
const before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`;
console.log(before);
