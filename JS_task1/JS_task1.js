/**
 * Created by Space on 2016/11/10.
 */


var fuck;
var i = 10;
var colorname;
function cc() {
if (i != 10){
    fuck[i].style.backgroundColor = "#e8830d"
}
    fuck = document.getElementsByClassName("grid");
    i = Math.floor(Math.random() * 9);//9个随机数
    var yanse;
    fuck[i].style.backgroundColor="yanse";
    yanse=Math.floor(Math.random() * 3);


    switch (yanse) {
        case 0:
            fuck[i].style.backgroundColor="red";
            colorname = "红色";
            break;
        case 1:
            fuck[i].style.backgroundColor="green";
            colorname = "绿色";
            break;
        case 2:
            fuck[i].style.backgroundColor="blue";
            colorname = "蓝色";
            break;
    }

    console.log("格子" + i+ "变成了" + colorname);
}
setInterval("cc()", 1000);















