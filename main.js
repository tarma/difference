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
var factor;
var t;
var state = true;
var c = 75;
var title = [];
var next = true;
var maxWidth = (window.innerWidth - 60) / 2;
var maxHeight = window.innerHeight - document.getElementById("header").clientHeight - document.getElementById("info").clientHeight - 100;
title[1] = "澳門大賽車——賽車女郎";
title[2] = "鉅記餅家";
title[3] = "澳門聖誕夜";
title[4] = "澳門賽車博物館";
title[5] = "澳門元紙幣（紀念版）";
title[6] = "澳門基本法成立紀念攤位";
title[7] = "澳門風雲";
title[8] = "澳門回歸紀念郵票";
title[11] = "澳門手信街";
title[12] = "澳門中秋夜";
title[13] = "澳門半島全圖";
title[14] = "澳門美食節代金券";
title[15] = "澳門大賽車——雷電風馳";
title[16] = "澳門手信博物館";
title[17] = "澳門賽狗之整裝待發";
title[18] = "澳門濠江中學";
title[19] = "澳門亞運會紀念郵票";
title[20] = "澳門大三巴";
title[21] = "澳門傳統木制路標";
title[22] = "澳門元";
title[23] = "澳門貨幣";
title[24] = "澳門特首崔世安與國家主席習近平會面";
title[25] = "澳門手信博物館";
title[26] = "澳門花車巡游";
title[27] = "澳門美高梅「光99影99水世界」奇幻光彩之旅";
title[28] = "澳門大熊貓館";
title[29] = "澳門代表手信";
title[30] = "澳門傳統小吃龍鬚糖";
target[1] = [{x: 300, y: 136, width: 35, height: 25}, {x: 140, y: 310, width: 80, height: 35}, {x: 60, y: 355, width: 50, height: 35}];
target[2] = [{x: 345, y: 20, width: 55, height: 45}, {x: 155, y: 195, width: 30, height: 35}, {x: 320, y: 290, width: 20, height: 25}];
target[3] = [{x: 540, y: 35, width: 35, height: 35}, {x: 975, y: 200, width: 25, height: 120}, {x: 755, y: 450, width: 95, height: 60}];
target[4] = [{x: 530, y: 320, width: 70, height: 75}, {x: 35, y: 355, width: 75, height: 85}, {x: 510, y: 10, width: 50, height: 40}];
target[5] = [{x: 200, y: 55, width: 50, height: 25}, {x: 215, y: 110, width: 40, height: 25}, {x: 180, y: 165, width: 15, height: 20}];
target[6] = [{x: 685, y: 445, width: 45, height: 45}, {x: 295, y: 250, width: 30, height: 25}, {x: 600, y: 160, width: 55, height: 30}];
target[7] = [{x: 250, y: 505, width: 20, height: 30}, {x: 482, y: 820, width: 15, height: 15}, {x: 480, y: 950, width: 25, height: 30}];
target[8] = [{x: 620, y: 100, width: 45, height: 15}, {x: 610, y: 235, width: 55, height: 35}, {x: 30, y: 290, width: 25, height: 35}];
target[11] = [{x: 895, y: 100, width: 20, height: 20}, {x: 912, y: 405, width: 15, height: 15}, {x: 825, y: 585, width: 45, height: 40}];
target[12] = [{x: 350, y: 200, width: 65, height: 45}, {x: 60, y: 150, width: 35, height: 40}, {x: 435, y: 310, width: 45, height: 65}];
target[13] = [{x: 135, y: 120, width: 40, height: 25}, {x: 130, y: 272, width: 15, height: 15}, {x: 360, y: 330, width: 60, height: 20}];
target[14] = [{x: 270, y: 295, width: 12, height: 20}, {x: 450, y: 380, width: 20, height: 15}, {x: 635, y: 580, width: 15, height: 25}];
target[15] = [{x: 228, y: 108, width: 20, height: 15}, {x: 370, y: 130, width: 45, height: 65}, {x: 100, y: 260, width: 18, height: 17}];
target[16] = [{x: 515, y: 65, width: 45, height: 55}, {x: 635, y: 315, width: 25, height: 20}, {x: 30, y: 240, width: 18, height: 30}];
target[17] = [{x: 360, y: 165, width: 40, height: 20}, {x: 20, y: 265, width: 20, height: 20}, {x: 405, y: 230, width: 20, height: 25}];
target[18] = [{x: 270, y: 60, width: 20, height: 25}, {x: 360, y: 320, width: 30, height: 25}, {x: 440, y: 145, width: 50, height: 20}];
target[19] = [{x: 135, y: 225, width: 60, height: 35}, {x: 800, y: 935, width: 65, height: 60}, {x: 175, y: 855, width: 40, height: 30}];
target[20] = [{x: 490, y: 235, width: 30, height: 40}, {x: 327, y: 95, width: 25, height: 20}, {x: 135, y: 260, width: 20, height: 55}];
target[21] = [{x: 285, y: 0, width: 35, height: 70}, {x: 310, y: 190, width: 20, height: 20}, {x: 475, y: 355, width:15, height: 45}];
target[22] = [{x: 685, y: 210, width: 305, height: 105}, {x: 100, y: 350, width: 100, height: 100}, {x: 1125, y: 245, width: 60, height: 85}];
target[23] = [{x: 550, y: 480, width: 140, height: 130}, {x: 805, y: 995, width: 45, height: 50}, {x: 225, y: 900, width: 250, height: 90}];
target[24] = [{x: 235, y: 270, width: 75, height: 170}, {x: 610, y: 585, width: 35, height: 25}, {x: 15, y: 570, width: 25, height: 20}];
target[25] = [{x: 95, y: 45, width: 35, height: 70}, {x: 25, y: 395, width: 25, height: 25}, {x: 423, y: 272, width: 15, height: 15}];
target[26] = [{x: 1140, y: 635, width: 25, height: 35}, {x: 250, y: 595, width: 115, height: 20}, {x: 765, y: 10, width: 15, height: 60}];
target[27] = [{x: 360, y: 0, width: 70, height: 175}, {x: 260, y: 985, width: 25, height: 145}, {x: 980, y: 1020, width: 360, height: 130}];
target[28] = [{x: 410, y: 95, width: 40, height: 20}, {x: 180, y: 70, width: 35, height: 40}, {x: 175, y: 455, width: 30, height: 40}];
target[29] = [{x: 620, y: 80, width: 95, height: 45}, {x: 425, y: 235, width: 40, height: 40}, {x: 310, y: 445, width: 35, height: 25}];
target[30] = [{x: 240, y: 150, width: 95, height: 55}, {x: 520, y: 350, width: 15, height: 25}, {x: 580, y: 165, width: 40, height: 40}];

function drawCanvas1(img, width, height) {
	c1.width = width;
	c1.height = height;
	cxt1.drawImage(img, 0, 0, width, height);
}

function drawCanvas2(img, width, height) {
	c2.width = width;
	c2.height = height;
	cxt2.drawImage(img, 0, 0, width, height);
}

function drawImg1() {
	if (this.height / maxHeight < this.width / maxWidth) {
		if (this.width > maxWidth) {
			factor = maxWidth / this.width;
			drawCanvas1(this, maxWidth, Math.floor(this.height * factor));
		} else {
			factor = 1;
			drawCanvas1(this, this.width, this.height);
		}
	} else {
		if (this.height > maxHeight) {
			factor = maxHeight / this.height;
			drawCanvas1(this, Math.floor(this.width * factor), maxHeight);
		} else {
			factor = 1;
			drawCanvas1(this, this.width, this.height);
		}
	}
	c = 75;
	document.getElementById("timer").innerHTML = c;
}

function drawImg2() {
	if (this.height / maxHeight < this.width / maxWidth) {
		if (this.width > maxWidth) {
			factor = maxWidth / this.width;
			drawCanvas2(this, maxWidth, Math.floor(this.height * factor));
		} else {
			factor = 1;
			drawCanvas2(this, this.width, this.height);
		}
	} else {
		if (this.height > maxHeight) {
			factor = maxHeight / this.height;
			drawCanvas2(this, Math.floor(this.width * factor), maxHeight);
		} else {
			factor = 1;
			drawCanvas2(this, this.width, this.height);
		}
	}
	c = 75;
	document.getElementById("timer").innerHTML = c;
}

function init(index) {
	sum = 5;
	count.innerHTML = sum;
	success = 0;
	for (var i = 0; i < 3; i++) {
		flag[i] = false;
	}
	if (!img1[index]) {
		img1[index] = new Image();
		img1[index].src = "image/" + index + ".jpg";
		img1[index].onload = drawImg1;
	} else {
		img1[index].onload();
	}
	if (!img2[index]) {
		img2[index] = new Image();
		img2[index].src = "image/new"+ index + ".jpg";
		img2[index].onload = drawImg2;
	} else {
		img2[index].onload();
	}
	document.getElementById("header").innerHTML = title[index];
	current = index;
	state = true;
}

function checkOnClick(x, y) {
	if (!state) {
		return;
	}
	for (var i = 0; i < 3; i++) {
		var obj = {
			x: target[current][i].x * factor,
			y: target[current][i].y * factor,
			width: target[current][i].width * factor,
			height: target[current][i].height * factor
		};
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
				state = false;
				if (next) {
					next = false;
					var num = Math.round(Math.random() * 30);
					while (num == 9 || num == 10 || num == 0) {
						num = Math.round(Math.random() * 30);
					}
					init(num);
					return;
				}
			}
			break;
		}
	}
	sum--;
	count.innerHTML = sum;
	if (sum == 0 && success < 3) {
		alert("失敗！");
		state = false;
	}
}

c1.onclick = function(e) {
	var x = e.pageX - c1.offsetLeft;
	var y = e.pageY - c1.offsetTop;
	checkOnClick(x, y);
};

c2.onclick = function(e) {
	var x = e.pageX - c2.offsetLeft;
	var y = e.pageY - c2.offsetTop;
	checkOnClick(x, y);
};

function timedCount() {
	if (!state) {
		return;
	}
	c--;
	document.getElementById("timer").innerHTML = c;
	if (c == 0) {
		alert("遊戲結束！");
		state = false;
		return;
	}
	t = setTimeout("timedCount()", 1000);
}

var num = Math.round(Math.random() * 30);
while (num == 9 || num == 10 || num == 0) {
	num = Math.round(Math.random() * 30);
}
init(num);
t = setTimeout("timedCount()", 1000);
