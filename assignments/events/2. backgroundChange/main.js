function colorChange() {
    var x, y, z
    x = Math.round(Math.random() * 255);
    y = Math.round(Math.random() * 255);
    z = Math.round(Math.random() * 255); //255 is the maximum rgb value
    a = Math.round(Math.random() * 1.0);
    var background = "background:rgba(" + x + "," + y + ", " + z + " , " + a + ");";
    var changeBackground = document.getElementById("rand-color");
    changeBackground.style = background;
   document.getElementById("para").innerText = background;
}
colorChange()