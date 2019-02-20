module.exports = function getZerosCount(number, base) {
  // your implementation

  function getSimpleNumber(value) {
    var arr = [];
    if (value > 0 && value != 1) {
      for (var i = 2; i <= value; i++) {
        while (value % i == 0 && value > 1) {
          arr.push(i);
          value = value / i;
        }
        if (value / i == 1) {
          arr.push(value);
        }
      }
      return arr;
    } else if (value == 1) {
      return 1;
    }
    return 'Введите не отрицательное число';
  }  

  var mass = getSimpleNumber(base);

  var startElement = 0, countNumber = 1, massTmp = [], tmp = 0;

  for (var i = 0; i < mass.length + 1; i++) {
    if (startElement != mass[i]) {
      massTmp.push(Math.floor(tmp / countNumber));
      tmp = 0;

      startElement = mass[i];
      var stepen = 1;

      while (startElement < number) {
        tmp += Math.floor(number / startElement);
        startElement = Math.pow(mass[i], ++stepen);
      }

      startElement = mass[i];
      countNumber = 1;

    } else {
      countNumber++;
    }
  }

  minValue = massTmp[1];
  for (var i = 1; i < massTmp.length; i++) {
    if (minValue > massTmp[i]) {
      minValue = massTmp[i];
    }
  }

  return minValue;
  
}