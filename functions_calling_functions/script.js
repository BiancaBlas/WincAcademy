const checkAge = function (number) {
  // console.log("entering check age");
  return number >= 18;
};

const greeting = function (age) {
  //console.log("entering greeting");
  if (checkAge(age) == true) {
    console.log("Hello there");
  } else {
    console.log("Hey kiddo");
  }
};

greeting(15);

// VAT calculations

const calculateVAT = function (base, VAT) {
  //console.log("entering calculateVAT");
  totalVat = base * (VAT / 100);
  return totalVat;
};

const totalPrice = function (base, VAT) {
  const totalVat = calculateVAT(base, VAT);
  const inclPrice = base + totalVat;
  return inclPrice;
};

const pay = totalPrice(1000, 21);
console.log(pay);

const calcBasePrice = function (total, VAT) {
  const bacePrice = total / (1 + VAT / 100);
  return bacePrice;
};

const calcVAT = function (total, VAT) {
  const prices = calcBasePrice(total, VAT);
  const vat = total - prices;
  return (prices, vat);
}
priceIncl = calcVAT(1210, 21);
console.log(priceIncl);

