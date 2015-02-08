function run(graphContainer){
	var myGraph = new Main(graphContainer);
	myGraph.init();	
	
	var div = document.createElement("div");
	
	var serviceProvider1 = document.createElement("div");
	serviceProvider1.setAttribute("style","background: url('src/images/serviceprovider1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div.appendChild(serviceProvider1);
	
	var blueCloud = document.createElement("div");
	blueCloud.setAttribute("style","background: url('src/images/bluecloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div.appendChild(blueCloud);
	//div.setAttribute("style","height:120px;width:60px;background: url(\'src/images/heart.png\');");
	
	
	myGraph.addVertices("service1",div,"",80,90,150,90);
	
	
	var div2 = document.createElement("div");
	
	var serviceProvider1 = document.createElement("div");
	serviceProvider1.setAttribute("style","background: url('src/images/comany1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div2.appendChild(serviceProvider1);
	
	var blueCloud = document.createElement("div");
	blueCloud.setAttribute("style","background: url('src/images/companycloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div2.appendChild(blueCloud);
	
	myGraph.addVertices("company1",div2,"Company 1",80,280,20,20);

	myGraph.addDualThickEdge("company1","service1");
	
	
	
	
	var SignalingNetwork = document.createElement("div");
	SignalingNetwork.setAttribute("style","background: url('src/images/arrow.png');width:100px; height:50px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("SignalingNetwork",SignalingNetwork,"Signaling Network",5,400,100,50);
	
	var edge = myGraph.addSimpleEdge("SignalingNetwork","company1",'simple1','2',new mxPoint(50, 330));
	
	var VoiceNetwork = document.createElement("div");
	VoiceNetwork.setAttribute("style","background: url('src/images/arrow.png');width:100px; height:50px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("VoiceNetwork",VoiceNetwork,"Voice Network",150,400,100,50);
	
	myGraph.addDualThickEdge("VoiceNetwork","company1");
}

