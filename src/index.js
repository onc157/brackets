module.exports = function check(str, bracketsConfig) {
  const ARRAY_BRACKETS_CONFIG = [];
  bracketsConfig.forEach(item => (ARRAY_BRACKETS_CONFIG.push(item[0].concat(item[1]))));

  let getPairOfBrackets;
  let stringToCut = str;

  for (let i = 0; i < ARRAY_BRACKETS_CONFIG.length; i = i + 1) {
    getPairOfBrackets = ARRAY_BRACKETS_CONFIG[i];
    stringToCut = stringToCut.replace(getPairOfBrackets, '');
  }
  if (stringToCut === '') {
    return true;
  } else if (stringToCut === str) {
    return false;
  } else return check(stringToCut, bracketsConfig);
}
