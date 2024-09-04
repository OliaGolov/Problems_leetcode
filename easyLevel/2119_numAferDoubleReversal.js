let num = 1204;

const deleteZeros = number => {
  let arrNum = Array.from(String(number));
  let reverseArr = [];
  let notZero = false;

  for (let i = arrNum.length - 1; i >= 0; i--) {
    if (arrNum[i] != 0 && notZero == false) {
      notZero = true;
    }

    if (notZero) {
      reverseArr.push(arrNum[i]);
    }
  }

  return reverseArr.join('');
};

const rev1 = deleteZeros(num);
const rev2 = deleteZeros(rev1);

console.log(num==rev2)
