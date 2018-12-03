const romanToInt = s => {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanNumeralMap[s.charAt(i)];
    let next;
    if (i + 1 < s.length) {
      next = romanNumeralMap[s.charAt(i + 1)];
    }
    if (next && next > current) {
      sum += next - current;
      i += 1;
    } else {
      sum += current;
    }
  }
  return sum;
};
