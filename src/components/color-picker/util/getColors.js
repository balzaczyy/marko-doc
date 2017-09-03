// import {
//   colors as flatColors,
// } from 'flat-colors'
const flatColors = require('flat-colors').colors;

const HEX_INDEX = 3;

// export default function getColors () {
module.exports = function getColors () {
  let colors = [];
  for (let i = 0; i < 10; i++) {
    colors.push(flatColors[i][HEX_INDEX]);
  }
  return colors;
};
