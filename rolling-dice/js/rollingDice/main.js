// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const roll = () => {
    switch (Math.floor(Math.random() * 6) + 1) {
      case 1:
        return (die = {
          value: 1,
          stringValue: "1",
          dieString: "\u2680",
        });
      case 2:
        return (die = {
          value: 2,
          stringValue: "2",
          dieString: "\u2681",
        });
      case 3:
        return (die = {
          value: 3,
          stringValue: "3",
          dieString: "\u2682",
        });
      case 4:
        return (die = {
          value: 4,
          stringValue: "4",
          dieString: "\u2683",
        });
      case 5:
        return (die = {
          value: 5,
          stringValue: "5",
          dieString: "\u2684",
        });
      case 6:
        return (die = {
          value: 6,
          stringValue: "6",
          dieString: "\u2685",
        });
    }
  };

for (let i = 0; i < 10; i++) {
  die1 = roll();
  die2 = roll();

  let message = `${die1.dieString} + ${die2.dieString} == ${
    die1.value + die2.value
  }`;

  if (die1.value == die2.value) {
    message += " DOUBLES!";
  }

  console.log(message);
}


