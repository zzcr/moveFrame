/*获取元素计算后的样式*/
function getStyle(obj,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		};
	};
/*完美运动框架*/
function moveStart(obj,json,fn){
		clearInterval(obj.timer);
			obj.timer=setInterval(function(){
			var flag=true;
			for(var attr in json){
			var speed=0;
			if(attr=='opacity'){
				speed=(json[attr]-parseFloat(getStyle(obj,attr)))/8;
				speed=speed>0?Math.ceil(speed*10)/10:Math.floor(speed*10)/10;
			}else{
				speed=(json[attr]-parseInt(getStyle(obj,attr)))/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
			};
			if(parseInt(getStyle(obj,attr))!=json[attr]){
				flag=false;
				if(attr=='opacity'){
					obj.style[attr]=parseFloat(getStyle(obj,attr))+speed;
				}else{
					obj.style[attr]=parseFloat(getStyle(obj,attr))+speed+'px';
				}
			};
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					return fn();
				};
			};
			};
		},30);
		
	};