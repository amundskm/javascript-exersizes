var ftoc = function(fTemp) {
  return ans = parseFloat(((fTemp- 32) / 1.8).toFixed(1));
}

var ctof = function(cTemp) {
  return ans = parseFloat(((cTemp * 9 / 5 + 32)).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
