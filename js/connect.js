window.onload = function(){
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
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("山东省济南市高新区龙翔商务大厦"); // 设置地图显示的城市 此项是必须设置的
	map.centerAndZoom("山东省济南市高新区龙翔商务大厦",18);
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
}
