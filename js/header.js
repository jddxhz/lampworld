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
}
