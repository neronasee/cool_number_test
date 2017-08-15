const addDigits = (num1, num2) => num1 + num2; 

const squareDigit = num => num * num;

const digitsSum = digits => digits.reduce(addDigits, 0);

const getDigits = num => num.toString().split('').map(digit => Number(digit));

const isCoolNumber = num => {
  if(num === 1) {
    return true;
  } else if (num === 4) {
    return false;
  }

  const sum = digitsSum(getDigits(num).map(squareDigit));

  return isCoolNumber(sum);
}

const getCoolSum = limit => {
  const coolNumbers = [];

  for(let i = 1; i <= limit; i++) {
    if(isCoolNumber(i)) {
      coolNumbers.push(i);
    }
  }

  return coolNumbers.reduce((sum, el) => {
    return sum += el;
  }, 0);
}

module.exports = getCoolSum;
