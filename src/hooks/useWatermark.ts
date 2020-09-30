"use strict";

// tslint:disable-next-line: only-arrow-functions
const setWatermark: (str: any) => any = function (str: any) {
	const id: string = "1.23452384164.123412415";
	if (document.getElementById(id) !== null) {
		document.body.removeChild(document.getElementById(id) as any);
	}

	const can: any = document.createElement("canvas");
	// 每一个水印的大小
	can.width = 160;
	can.height = 100;

	const cans: any = can.getContext("2d");
	cans.rotate(-20 * Math.PI / 180);
	cans.font = "16px Vedana";
	cans.fillStyle = "rgba(200, 200, 200, 0.40)";
	cans.textAlign = "left";
	cans.textBaseline = "Middle";
	cans.fillText(str, can.width / 16, can.height / 2);

	const div = document.createElement("div");
	div.id = id;
	div.style.pointerEvents = "none";
	div.style.top = "0px";
	div.style.left = "0px";
	div.style.position = "fixed";
	div.style.position = "absolute";
	div.style.zIndex = "100";
	div.style.width = document.documentElement.clientWidth + "px";  //整个水印区域的宽高
	div.style.height = document.documentElement.clientHeight + "px";
	div.style.background = "url(" + can.toDataURL("image/png") + ") left top repeat";
	document.body.appendChild(div);
	return id;
};

const useWaterMark = {
	// 该方法只允许调用一次
	set: (str: any) => {
		let id = setWatermark(str);
		setInterval(() => {
			if (document.getElementById(id) === null) {
				id = setWatermark(str);
			}
		}, 500);
		window.onresize = () => {
			setWatermark(str);
		};
	},

};

export default useWaterMark 