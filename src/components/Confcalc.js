/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
const Confcalc = (value) => {
  if (value === '0') return value;
  let output = '';
  let decimal = '';
  let isNeg = false;
  if (value.includes(',')) {
    output = value.substring(0, value.indexOf(','));
    decimal = value.substring(value.indexOf(','));
  } else {
    output = value;
  }
  if (parseFloat(value) < 0) {
    isNeg = true;
    output = output.substring(1);
  }
  if (parseFloat(value) > 999999999) {
    // numMax = true;
    output = output.numMax;
  }

  return isNeg
    ? `-${parseFloat(output).toLocaleString()}${decimal}`
    : parseFloat(output).toLocaleString() + decimal;
};

export default Confcalc;
