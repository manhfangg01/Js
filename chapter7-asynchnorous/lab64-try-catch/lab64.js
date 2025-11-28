console.log("Hello lab 64");
const a = 19;
const b = 0;

const divideSomething = (a, b) => {
  if (b == 0) throw Error("Can't be divided by 0");
  console.log(a / b);
};

try {
  divideSomething(a, b);
} catch (error) {
  console.log("Something's off>>>>", error.message);
}
