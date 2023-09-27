function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * b;
    let aste = Math.pow(a,b)
    return { summa, vahe, jagatis, korrutis, aste };
  }
  
  module.exports = matemaatilisedArvutused;
  