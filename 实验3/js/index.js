/**
 * 
 * @authors Polaris
 * @date    2022-03-09 09:55:45
 * @version $Id$
 */

//点击p1对象,其字体颜色变成红色;
function clickP1(){
	document.getElementById("p1").style.color="red";
}

//点击p2对象,将h1的内容变成当前的日期,其格式为 yyyy-mm-dd;
function clickP2(){
    var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth()+1)).slice(-2);
    var today = time.getFullYear() + "-" + month + "-" + day;
	document.querySelector("h1").innerHTML=today;
}

// 点击p3对象,将其父对象的li元素增加 fn-active 类;
function clickP3(){
    document.getElementById("p3").classList.add("fn-active");
}

// 点击p4对象,删除表格的p8元素;
function clickP4(){
    var parent = document.querySelector("ul");
    var chlid = document.getElementById("p8");
    parent.removeChild(chlid);
}

// 点击p5对象,打开一个新窗口,里面显示淘宝主页;
function clickP5(){
    window.open("https://www.taobao.com");
}

// 点击p6对象,在 ul 的最后添加一个 li 元素，其内容是 p9;
function clickP6(){
    var list = document.createElement("li");
    var node = document.createTextNode("p9");
    list.appendChild(node);
    var elem = document.querySelector("ul");
    elem.appendChild(list);
    list.setAttribute("id", "p9");
}

// 点击p7对象,将 m-box 的宽度设置到屏幕宽度;
function clickP7() {
    var wid = screen.availWidth;
    document.querySelector("div").style.width = wid + 'px' ;
}

// 点击li对象, 弹出 alert 对话框显示当前点击 li 的序号;
document.querySelector("ul").addEventListener("click",function(e) {

    if(e.target && e.target.nodeName == "LI") {

      alert("List item " + e.target.id);
    }
});