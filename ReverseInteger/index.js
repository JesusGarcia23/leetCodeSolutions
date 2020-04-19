var reverse = function(x) {
    let result = x > 0 ? Number(x.toString().split('').reverse().join("")) : -Math.abs(Number(Math.abs(x).toString().split('').reverse().join("")));
    return result < 2147483648 && result > -2147483648 ? result : 0;
  };