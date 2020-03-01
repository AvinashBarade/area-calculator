function showresult(choise) {
    var l1 = parseFloat(document.getElementById('l1').value);
    var l2 = parseFloat(document.getElementById('l2').value);
    var r1 = parseFloat(document.getElementById('r1').value);
    var r2 = parseFloat(document.getElementById('r2').value);
    var length,width;
    if (!l2)
        length = l1;
    else
        length = (l1 + l2) / 2
    if (!r2)
        width = r1;
    else
        width = (r1 + r2) / 2
    var g = (length * width) / 1089;
    var y = g / 40;

    document.getElementById('gunthe').value = g.toFixed(2);
    document.getElementById('yekar').value = y.toFixed(2);
}
