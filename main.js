function getRandom(min, max)
{ 
return parseInt(Math.random() * (max - min) + min);
}
function add_line()
{
    var id = getRandom(0, 100000);
    var table = document.getElementById("table").innerHTML;
    table += "<td><input type=text value='id = "+id+"'></input></td>";
    document.getElementById("table").innerHTML = table;
}