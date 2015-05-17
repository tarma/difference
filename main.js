var c1 = document.getElementById("myCanvas1");
var c2 = document.getElementById("myCanvas2");
var cxt1 = c1.getContext("2d");
var cxt2 = c2.getContext("2d");
var sum = 5;
var success = 0;
var count = document.getElementById("counter");
var flag = [];
var current;
var img1 = [];
var img2 = [];
var target = [];
target[1] = [{x: 300, y: 136, width: 35, height: 25}, {x: 140, y: 310, width: 80, height: 35}, {x: 60, y: 355, width: 50, height: 35}];
target[2] = [{x: 345, y: 20, width: 55, height: 45}, {x: 155, y: 195, width: 30, height: 35}, {x: 320, y: 290, width: 20, height: 25}];
target[3] = [{x: 540, y: 35, width: 35, height: 35}, {x: 975, y: 200, width: 25, height: 120}, {x: 755, y: 450, width: 95, height: 60}];
target[5] = [{x: 200, y: 55, width: 50, height: 25}, {x: 215, y: 110, width: 40, height: 25}, {x: 180, y: 165, width: 15, height: 20}];
target[6] = [{x: 685, y: 445, width: 45, height: 45}, {x: 295, y: 250, width: 30, height: 25}, {x: 600, y: 160, width: 55, height: 30}];
target[7] = [{x: 250, y: 505, width: 20, height: 30}, {x: 482, y: 820, width: 15, height: 15}, {x: 480, y: 950, width: 25, height: 30}];
target[8] = [{x: 620, y: 100, width: 45, height: 15}, {x: 610, y: 235, width: 55, height: 35}, {x: 30, y: 290, width: 25, height: 35}];
target[11] = [{x: 895, y: 100, width: 20, height: 20}, {x: 912, y: 405, width: 15, height: 15}, {x: 825, y: 585, width: 45, height: 40}];
target[12] = [{x: 350, y: 200, width: 65, height: 45}, {x: 60, y: 150, width: 35, height: 40}, {x: 435, y: 310, width: 45, height: 65}];
target[14] = [{x: 270, y: 295, width: 12, height: 20}, {x: 450, y: 380, width: 20, height: 15}, {x: 635, y: 580, width: 15, height: 25}];
target[15] = [{x: 228, y: 108, width: 20, height: 15}, {x: 370, y: 130, width: 45, height: 65}, {x: 100, y: 260, width: 18, height: 17}];
target[16] = [{x: 515, y: 65, width: 45, height: 55}, {x: 635, y: 315, width: 25, height: 20}, {x: 30, y: 240, width: 18, height: 30}];
target[18] = [{x: 270, y: 60, width: 20, height: 25}, {x: 360, y: 320, width: 30, height: 25}, {x: 440, y: 145, width: 50, height: 20}];
target[19] = [{x: 135, y: 225, width: 60, height: 35}, {x: 800, y: 935, width: 65, height: 60}, {x: 175, y: 855, width: 40, height: 30}];
target[20] = [{x: 490, y: 235, width: 30, height: 40}, {x: 327, y: 95, width: 25, height: 20}, {x: 135, y: 260, width: 20, height: 55}];

for (var i = 1; i <= 30; i++) {
	img1[i] = new Image();
	img1[i].src = img1.src = "image/" + i + ".jpg";
	img2[i] = new Image();
	img2[i].src = img2.src = "image/new"+ i + ".jpg";
}

function init(index) {
	sum = 5;
	success = 0;
	for (var i = 0; i < 3; i++) {
		flag[i] = false;
	}
	current = index;
	c1.width = img1[index].width;
	c1.height = img1[index].height;
	cxt1.drawImage(img1[index], 0, 0);
	c2.width = img2[index].width;
	c2.height = img2[index].height;
	cxt2.drawImage(img2[index], 0, 0);
}

function checkOnClick(x, y) {
	if (success == 3 || sum == 0) {
		return;
	}
	for (var i = 0; i < 3; i++) {
		obj = target[current][i];
		if (x > obj.x && x < obj.x + obj.width && y > obj.y && y < obj.y + obj.height) {
			cxt1.strokeStyle = "#ff0000";
			cxt2.strokeStyle = "#ff0000";
			cxt1.lineWidth = 4;
			cxt2.lineWidth = 4;
			cxt1.strokeRect(obj.x, obj.y, obj.width, obj.height);
			cxt2.strokeRect(obj.x, obj.y, obj.width, obj.height);
			if (flag[i]) {
				return;
			}
			success++;
			flag[i] = true;
			if (success == 3) {
				alert("成功！");
			}
			break;
		}
	}
	sum--;
	count.innerHTML = sum;
	if (sum == 0 && success < 3) {
		alert("失敗！");
	}
}

c1.onclick = function(e) {
	var x = e.pageX - c1.offsetLeft;
	var y = e.pageY - c1.offsetTop;
	checkOnClick(x, y);
}

c2.onclick = function(e) {
	var x = e.pageX - c2.offsetLeft;
	var y = e.pageY - c2.offsetTop;
	checkOnClick(x, y);
}


init(Math.floor(Math.random() * 30));
