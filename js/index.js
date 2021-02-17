window.onload = function(){
	var menu_btn = document.querySelector("#menu_btn")
	var menu_llist = document.querySelector("#menu_list")
	var child_1 = menu_btn.children[0]
	var child_3 = menu_btn.children[2]
	var flag = true
	
	var menu_btn = document.querySelector("#menu_btn")
	var menu_llist = document.querySelector("#menu_list")
	var flag = true
	
	menu_btn.onclick = function(){
		if(flag){
			menu_llist.style.display = "block"
			document.body.style.height = "0"
			document.body.style.overflow = "hidden"
			menu_btn.children[0].style.transformOrigin = "center"
			menu_btn.children[0].style.transform = "translatey(7px) rotate(45deg)"
			menu_btn.children[1].style.display = "none" 
			menu_btn.children[2].style.transformOrigin = "center"
			menu_btn.children[2].style.transform = "translatey(-7px) rotate(135deg)"
			flag = !flag
		}else{
			menu_llist.style.display = "none"
			document.body.style.overflow = ""
			menu_btn.children[0].style.transformOrigin = "center"
			menu_btn.children[0].style.transform = "translatey(0) rotate(0)"
			menu_btn.children[1].style.display = "block" 
			menu_btn.children[2].style.transformOrigin = "center"
			menu_btn.children[2].style.transform = "translatey(0) rotate(0)"
			flag = !flag
		}
	}
	
	init()
	//轮播函数
	var prevIndex, nextIndex;
	var len;
	var id;

	function init() {
		prevIndex = nextIndex = 0;
		len = document.querySelectorAll('.list .item').length;
		document.querySelector('.prev').onclick = function() {
			slidePrev();
		}
		document.querySelector('.next').onclick = function() {
			slideNext();
		}
		
		var bullets = document.querySelectorAll('.slider .pagination .bullet');
		for(var i = 0; i < bullets.length; i++) {
			bullets[i].index = i;
			bullets[i].onclick = function() {
				prevIndex = nextIndex;
				nextIndex = this.index;
				slideTo(prevIndex, nextIndex);
			}
		}
		auto();
		var slider=document.querySelector('.slider');
		document.querySelector('.prev').onmouseover=function(){
			stop();
		}
		document.querySelector('.next').onmouseout=function(){
			auto();
		}
	}

	function slidePrev() {
		prevIndex = nextIndex;
		nextIndex--;
		if(nextIndex === -1) {
			nextIndex = len - 1;
		}
		slideTo(prevIndex, nextIndex);
	}

	function slideNext() {
		prevIndex = nextIndex;
		nextIndex++;
		if(nextIndex === len) {
			nextIndex = 0;
		}
		slideTo(prevIndex, nextIndex);
	}

	function slideTo(prev, next) {
		var lis = document.querySelectorAll('.list .item');
		var bullets=document.querySelectorAll('.slider .pagination .bullet');
		
		bullets[prev].className='bullet';
		bullets[next].className='bullet focus';
		//lis[prev].style.opacity = 0;
		//lis[next].style.opacity = 1;
		animate(lis[prev], {
			opacity: 0
		});
		animate(lis[next], {
			opacity: 100
		});
	}
	
	function auto(){
		clearInterval(id);
		id =setInterval(function(){
			slideNext();
		},4000);
	}
	function stop(){
		clearInterval(id);
	}
	function getStyle(el, property) {
		if(getComputedStyle) {
			return getComputedStyle(el)[property];
		} else {
			return el.currentStyle[property];
		}
	}

	function animate(el, properties) {
		clearInterval(el.timerId);
		el.timerId = setInterval(function() {
			for(var property in properties) {
				var current;
				var target = properties[property];//{opacity:1}
	
				if(property === 'opacity') {
					current = Math.round(parseFloat(getStyle(el, 'opacity')) * 100);
				} else {
					current = parseInt(getStyle(el, property));
				}
				var speed = (target - current) / 30;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(property === 'opacity') {
					el.style.opacity = (current + speed) / 100;
				} else {
					el.style[property] = current + speed + 'px';
				}
			}
		}, 20)
	}
}
