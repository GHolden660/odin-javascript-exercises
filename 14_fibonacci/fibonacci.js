function fibonacci(num) {

    const arg = Number(num);
    if (arg < 0) return "OOPS";

    firstPrev = 1;
    secondPrev = 0;

    if (num == 0) return 0;

   for (let i = 2; i <= num; i++){
        let newNum = secondPrev + firstPrev;
        secondPrev = firstPrev;
        firstPrev = newNum;
   }
   return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
