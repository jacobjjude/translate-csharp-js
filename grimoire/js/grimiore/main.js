// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

allSpells = [
  {
    name: "Turn enemy into a newt",
    isEvil: true,
    energyRequired: 5.1,
  },
  {
    name: "Conjure some gold for a local charity",
    isEvil: false,
    energyRequired: 2.99,
  },
  {
    name: "Give a deaf person the ability to heal",
    isEvil: false,
    energyRequired: 12.2,
  },
  {
    name: "Make yourself emperor of the universe",
    isEvil: true,
    energyRequired: 100.0,
  },
  {
    name: "Convince your relatives your political views are correct",
    isEvil: false,
    energyRequired: 2921.5,
  },
];

const makeGoodSpellBook = () => {
  goodBooks = {};
  goodBooks.title = "Good Books";
  goodBooks.spells = allSpells.filter((x) => x.isEvil === true);
  return goodBooks;
};

const makeEvilSpellBook = () => {
  evilBooks = {};
  evilBooks.title = "Evil Books";
  evilBooks.spells = allSpells.filter((x) => x.isEvil === false);

  return evilBooks;
};

let goodBook = makeGoodSpellBook();
let evilBook = makeEvilSpellBook();

const displaySpellBook = (book) => {
  console.log(book.title);
  for (const spell of book.spells) {
    console.log(spell.name);
  }
};

console.log(displaySpellBook(goodBook));
console.log("");
console.log(displaySpellBook(evilBook));
