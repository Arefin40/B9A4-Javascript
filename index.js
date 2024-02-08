function calculateMoney(ticketSale) {
   if (ticketSale < 0) return "Invalid Number";
   const fixedCost = 500 + 8 * 50;
   const sale = 120 * ticketSale;
   return sale - fixedCost;
}

function checkName(name) {
   if (typeof name !== "string") return "invalid";

   name = name.toLowerCase();
   const lastChar = name.charAt(name.length - 1);

   if (
      lastChar === "a" ||
      lastChar === "y" ||
      lastChar === "i" ||
      lastChar === "e" ||
      lastChar === "o" ||
      lastChar === "u" ||
      lastChar === "w"
   ) {
      return "Good Name";
   } else {
      return "Bad Name";
   }
}

function deleteInvalids(array) {
   if (!Array.isArray(array)) return "Invalid Array";
   const filderedArray = array.filter(
      (value) => typeof value === "number" && !isNaN(value)
   );
   return filderedArray;
}

function password(obj) {
   if (
      !obj.hasOwnProperty("name") ||
      !obj.hasOwnProperty("birthYear") ||
      !obj.hasOwnProperty("siteName")
   ) {
      return "invalid";
   }
   let { name, birthYear, siteName } = obj;
   if (birthYear.toString().length !== 4) return "invalid";

   siteName = siteName.charAt(0).toUpperCase() + siteName.substring(1);
   return `${siteName}#${name}@${birthYear}`;
}

function monthlySavings(arr, livingCost) {
   if (
      !Array.isArray(arr) ||
      !typeof livingCost === "number" ||
      isNaN(livingCost)
   ) {
      return "invalid input";
   }

   const calculateIncome = (total, currentAmnt) => {
      return currentAmnt < 3000
         ? total + currentAmnt
         : total + currentAmnt * 0.8;
   };
   const totalIncome = arr.reduce(calculateIncome, 0);
   const savings = totalIncome - livingCost;
   return savings >= 0 ? savings : "earn more";
}

// Testing
console.log();
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

console.log();
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

console.log();
console.log(
   deleteInvalids([
      1,
      null,
      undefined,
      18,
      -19,
      NaN,
      "12",
      [1, 2],
      { ob: "lala" },
   ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

console.log();
console.log(
   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

console.log();
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
