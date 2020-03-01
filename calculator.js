function showresult(choise) {
    var l1 = parseFloat(document.getElementById('l1').value);
    var l2 = parseFloat(document.getElementById('l2').value);
    var r1 = parseFloat(document.getElementById('r1').value);
    var r2 = parseFloat(document.getElementById('r2').value);

    if (!l2 || !Number.isNaN(l2))
        l2 = l1
    if (!r2 || !Number.isNaN(r2) )
        r2 = r1
    var g = (((l1 + l2) / 2) * ((r1 + r2) / 2)) / 1089;
    var y = g / 40;


    document.getElementById('gunthe').value = g.toFixed(2);
    document.getElementById('yekar').value = y.toFixed(2);
}