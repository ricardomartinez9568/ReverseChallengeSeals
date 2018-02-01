function reverse(s) {
    var s = document.getElementById("reverse").value;
    var o = [];
    for (var i = s.length - 1, j = 0; i >= 0; i--, j++) {
      o[j] = s[i];
    return o.join('');
    }
    console.log(reverse)
}