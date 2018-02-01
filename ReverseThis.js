function reverse() {
  var s = document.getElementById("reverse").value;
  var o = [];
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
  console.log(o);
  }
}