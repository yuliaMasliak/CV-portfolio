function duplicateEncode(word) {
  let arr = [];
  let res = '';
  let wordRes = word.toLowerCase().split('');
  wordRes.forEach((el) => {
    let count = 0;
    for (let i = 0; i < wordRes.length; i++) {
      if (el == wordRes[i]) {
        count += 1;
      }
    }
    count > 1 ? (res += ')') : (res += '(');
  });
  return res;
}
