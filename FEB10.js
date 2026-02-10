//Area of a Triangle
function areaofatriangle(){
    base = Number(document.getElementById("Base").value);
    height = Number(document.getElementById("Height").value);
    areaOfTriangle = (base * height) / 2; 

    document.getElementById("result").innerHTML = "The Area Of The Triangle Is: " + areaOfTriangle;
}