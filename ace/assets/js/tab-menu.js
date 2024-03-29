var listItem = '<input id="tabValue" type="hidden" /><div id="rightMenu"><ul><li onclick="refreshTab()"><i class="menu-icon fa fa-refresh"></i>刷新</li><li onclick="closeSelf()"><i class="menu-icon fa fa-remove"></i>关闭当前</li><li onclick="closeOtherTabs()"><i class="menu-icon fa fa-times-circle"></i>关闭其他</li><li class="J_tabCloseAll"><i class="menu-icon fa fa-times-circle"></i>关闭全部</li></ul></div>';
$("body").append(listItem);


var getOffset = {
	top: function (obj) {
		return obj.offsetTop + (obj.offsetParent ? arguments.callee(obj.offsetParent) : 0) 
	},
	left: function (obj) {
		return obj.offsetLeft + (obj.offsetParent ? arguments.callee(obj.offsetParent) : 0) 
	}	
};
window.onload = function ()
{
	var oMenu = document.getElementById("rightMenu");
	var aUl = oMenu.getElementsByTagName("ul");
	var aLi = oMenu.getElementsByTagName("li");
	var showTimer = hideTimer = null;
	var i = 0;
	var maxWidth = maxHeight = 0;
	var aDoc = [document.documentElement.offsetWidth, document.documentElement.offsetHeight];
	
	oMenu.style.display = "none";
	
	for (i = 0; i < aLi.length; i++)
	{
		//为含有子菜单的li加上箭头
		aLi[i].getElementsByTagName("ul")[0] && (aLi[i].className = "sub");
		
		//鼠标移入
		aLi[i].onmouseover = function ()
		{
			var oThis = this;
			var oUl = oThis.getElementsByTagName("ul");
			
			//鼠标移入样式
			oThis.className += " active";			
			
			//显示子菜单
			if (oUl[0])
			{
				clearTimeout(hideTimer);				
				showTimer = setTimeout(function ()
				{
					for (i = 0; i < oThis.parentNode.children.length; i++)
					{
						oThis.parentNode.children[i].getElementsByTagName("ul")[0] &&
						(oThis.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none");
					}
					oUl[0].style.display = "block";
					oUl[0].style.top = oThis.offsetTop + "px";
					oUl[0].style.left = oThis.offsetWidth + "px";
					setWidth(oUl[0]);
					
					//最大显示范围					
					maxWidth = aDoc[0] - oUl[0].offsetWidth;
					maxHeight = aDoc[1] - oUl[0].offsetHeight;
					
					//防止溢出
					maxWidth < getOffset.left(oUl[0]) && (oUl[0].style.left = -oUl[0].clientWidth + "px");
					maxHeight < getOffset.top(oUl[0]) && (oUl[0].style.top = -oUl[0].clientHeight + oThis.offsetTop + oThis.clientHeight + "px")
				},300);
			}			
		};
			
		//鼠标移出	
		aLi[i].onmouseout = function ()
		{
			var oThis = this;
			var oUl = oThis.getElementsByTagName("ul");
			//鼠标移出样式
			oThis.className = oThis.className.replace(/\s?active/,"");
			
			clearTimeout(showTimer);
			hideTimer = setTimeout(function ()
			{
				for (i = 0; i < oThis.parentNode.children.length; i++)
				{
					oThis.parentNode.children[i].getElementsByTagName("ul")[0] &&
					(oThis.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none");
				}
			},300);
		};
	}	
	
	
	//自定义右键菜单
	document.oncontextmenu = function (event)
	{
		$("#tabValue").val(event.srcElement.dataset.id);
		document.getElementById("rightMenu").style.display = "none"	
		var event = event || window.event;
		var tag = event.target || event.srcElement;
		if((tag.className).indexOf('J_menuTab')!=-1 && (tag.className).indexOf('J_menuTabs')!=10){
			oMenu.style.display = "block";
			oMenu.style.top = event.clientY + "px";
			oMenu.style.left = event.clientX + "px";
			setWidth(aUl[0]);
			//最大显示范围
			maxWidth = aDoc[0] - oMenu.offsetWidth;
			maxHeight = aDoc[1] - oMenu.offsetHeight;
		
		//防止菜单溢出
		oMenu.offsetTop > maxHeight && (oMenu.style.top = maxHeight + "px");
		oMenu.offsetLeft > maxWidth && (oMenu.style.left = maxWidth + "px");
		return false;
		}
		return true;
		
		
	};
	
	//点击隐藏菜单
	document.onclick = function ()
	{
		document.getElementById("rightMenu").style.display = "none"	
	};
	
	//取li中最大的宽度, 并赋给同级所有li	
	function setWidth(obj)
	{
		maxWidth = 0;
		for (i = 0; i < obj.children.length; i++)
		{
			var oLi = obj.children[i];			
			var iWidth = oLi.clientWidth - parseInt(oLi.currentStyle ? oLi.currentStyle["paddingLeft"] : getComputedStyle(oLi,null)["paddingLeft"]) * 2
			if (iWidth > maxWidth) maxWidth = iWidth;
		}
		for (i = 0; i < obj.children.length; i++) obj.children[i].style.width = maxWidth + "px";
	}
};