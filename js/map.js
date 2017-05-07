
var map = new BMap.Map("map"); 
var point = new BMap.Point(120.142181, 30.25725);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(true);
var marker = new BMap.Marker(point);     
map.addOverlay(marker);
marker.enableDragging();
marker.addEventListener("dragend", function(e) {
	alert(e.point.lng + ", " + e.point.lat);
});



var local = new BMap.LocalSearch(map,   
              { renderOptions:{map: map, autoViewport: true}});      
local.searchNearby("宾馆", "西湖");
var markerArr = [];
var transit = new BMap.TransitRoute(map, {
				renderOptions: {
					map: map,
					panel:"route"
				}
			});
local.setMarkersSetCallback(function(pois) {
	for (var i = 0; i < pois.length; i++) {
		markerArr[i] = pois[i].marker;
		pois[i].marker.addEventListener("click", function(e) {
			transit.search("杭州师范大学-东南门", this.z.title);
			//transit.clearResults();
		})
	}
})



var school_info=[
  [120.022212,30.298738,"杭州师范大学图书馆"],
  [120.020371,30.297966,"杭州师范大学恕园27"],
  [120.020595,30.296797,"杭州师范大学恕园9"],
  [120.01834,30.297982,"杭州师范大学恕园30"],
  [120.019149,30.296431,"一鸣真鲜奶吧"],
  [120.018143,30.296431,"杭州师范大学外国语学院"],
  [120.016203,30.296657,"杭州师范大学-学生事务服务中心"],
  [120.016786,30.296267,"菜鸟驿站"],
  [120.015178,30.296407, "杭州师范大学博文苑8"],
  [120.016481,30.295737, "杭州师范大学博文苑5"],
  [120.015762,30.295246, "demo照相馆"],
  [120.016993,30.295409, "超市"],
  [120.017415,30.294677, "棋乐弈秋棋社"],
  [120.019005,30.295277, "杭州师范大学恕园7"],
  [120.020443,30.295713, "杭州师范大学恕园2"],
  [120.02002,30.294872,  "阿里巴巴商学院"],
];


var opts = {
  width: 200, // 信息窗口宽度    
  height: 200, // 信息窗口高度    
  title: "<span style='color:black'>"+"图片：", // 信息窗口标题   
}

function schoolmarker(){
	for(var i = 0;i < school_info.length;i++){
	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
	var address = school_info[i][2];
	map.addOverlay(point);
	OnClick(address,point);
}
}


function OnClick(address,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var div=document.createElement("div");
	div.style.width='200px';
	div.style.height="150px";
	div.style.border = '1px solid black';
	var img = document.createElement('img');
	img.style.width='200px';
	img.style.height='150px';
	img.setAttribute('href','img/buliding.jpg')
	div.append(img);
	div.append(address);
		var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
schoolmarker();