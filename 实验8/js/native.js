function initDelete(){
	var deleButton = document.querySelectorAll(".delete");
	for(var i=0;i<deleButton.length;i++){
		deleButton[i].addEventListener("click",function (e) {
			e.path[1].remove();
			var num = e.path[2].childElementCount-1;
			for(var i=1;i<=num;i++){
				document.querySelectorAll(".ex3 li span")[i-1].textContent=i;
			}
		});
	}
}
 
function init(){
	var el = document.querySelectorAll('.m-choice button');
	var img = document.querySelectorAll('.image');
	var exSlid = document.querySelectorAll('.ex2-choice button');
	var addButton = document.querySelectorAll('.add')[0];
	initDelete();

	const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.offsetHeight,
      body.scrollHeight,
      html.clientHeight,
      html.offsetHeight,
      html.scrollHeight
    );

	for(var i=0;i<el.length;i++){
		el[i].addEventListener("click",function (e) {
			for(var i=0;i<el.length;i++){
				el[i].classList.remove("checked");
			}
			this.classList.add("checked");
			var className = this.textContent;
			for(var i=0;i<el.length;i++){
				document.querySelectorAll(".m-index")[i].style.display = 'none';
			}
			document.querySelectorAll("."+className)[0].style.display="flex";
		},false);
	}

	for(var j=0;j<img.length;j++){
		img[j].addEventListener("click",function () {
			var thisImg = new Image();
			thisImg.src =this.getAttribute("src");
			thisImg.style.width=height/2;
			document.querySelectorAll(".cover")[0].style.display="block";
			var amplifyImg=document.querySelectorAll(".amplifyImg")[0];
			amplifyImg.style.display="flex";
			amplifyImg.appendChild(thisImg);
			amplifyImg.style.height=height;
			amplifyImg.addEventListener("click",function () {
				document.querySelectorAll(".cover")[0].style.display="none";
				this.style.display="none";
				this.innerHTML='';
				this.style.height=0;
			});
		});
	}

	for(var m=0;m<exSlid.length;m++){
		exSlid[m].addEventListener("click",function (e) {
			for(var i=0;i<exSlid.length;i++){
					exSlid[i].classList.remove("checked");
			}
			this.classList.add("checked");
			var classIndex = this.textContent;
			for(var i=0;i<el.length;i++){
					document.querySelectorAll(".ex2-index")[i].style.display = 'none';
				}
				document.querySelectorAll(".ex2-index")[classIndex-1].style.display="block";
		});
	}

	addButton.addEventListener("click",function () {
		var str="";
		var index;
		var exList = document.querySelectorAll(".ex3 li span");
		if(exList.length>0){
			index=exList.length+1;
		}
		else {
			index=1;
		}
		str="<li><span>"+index+"</span>"+
			"<input type='text'>"+
			"<button class='delete'>Delete</button></li>";
		document.querySelectorAll(".ex3")[0].insertAdjacentHTML('beforeend',str);
		initDelete();
	});

}

init();
