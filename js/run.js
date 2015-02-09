var json = [
   {
      "anonymous" : false,
      "callerIdentity" : false,
      "callerOptionRadio" : null,
      "chkCondition" : false,
      "condition" : "On Not Registered",
      "deactivateCondition" : false,
      "divertedTo" : 0,
      "divertedTo_" : "Other",
      "divertedValue" : "sip:Bob@company2.com",
      "endDate" : null,
      "endHour" : 0,
      "endMeridian" : null,
      "endMinute" : 0,
      "hour" : 0,
      "id" : 5,
      "mediaCondition" : false,
      "mediaType" : 0,
      "meridian" : null,
      "minute" : 0,
      "notify" : false,
      "notifyCaller" : false,
      "notifySelf" : false,
      "notifyselfOnoutboundCalls" : false,
      "otherNum" : null,
      "ruleName" : "R12.1423226635564",
      "ruleStatus" : "1",
      "selfToCaller" : false,
      "startDate" : null,
      "status" : 1,
      "timeCondition" : false,
      "timeZone" : null,
      "timer" : 0,
      "toCallee" : false,
      "toCaller" : false,
      "uri" : null,
      "uriNumber" : null,
      "userId" : 0
   }
];


function run(graphContainer){
	var myGraph = new Main(graphContainer);
	myGraph.init();	
	
	var VertexName = {
	Service1 : 'service1',
	Company1 : 'company1',
	SignallingNetwork1 : "signalingnw1",
	VoiceNetwork1 : "voicenw1",
	Mobile1 : "mobile1",
	Service2 : "service2",
	Company2 : "company2",
	SignallingNetwork2 : "signalingnw2",
	VoiceNetwork2 : "voicenw2",
	CSCFNode : "cscf",
	MMTel_AS : "mmtel",
	BCS : "bcs"
	};
	
	
	
	var div = document.createElement("div");
	var serviceProvider1 = document.createElement("div");
	serviceProvider1.setAttribute("style","background: url('src/images/serviceprovider1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div.appendChild(serviceProvider1);
	var blueCloud = document.createElement("div");
	blueCloud.setAttribute("style","background: url('src/images/bluecloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div.appendChild(blueCloud);
	myGraph.addVertices('service1',div,"",40,90,150,75);
	
	
	var div2 = document.createElement("div");
	var serviceProvider1 = document.createElement("div");
	serviceProvider1.setAttribute("style","background: url('src/images/comany1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div2.appendChild(serviceProvider1);
	var blueCloud = document.createElement("div");
	blueCloud.setAttribute("style","background: url('src/images/companycloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div2.appendChild(blueCloud);
	myGraph.addVertices('company1',div2,"Company 1",30,250,150,100);
	
	
	var SignalingNetwork = document.createElement("div");
	SignalingNetwork.setAttribute("style","background: url('src/images/arrow.png');width:50px; height:30px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("signalingnw1",SignalingNetwork,"Signaling Network",25,400,50,30);
	
	
	
	var VoiceNetwork = document.createElement("div");
	VoiceNetwork.setAttribute("style","background: url('src/images/arrow.png');width:50px; height:30px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("voicenw1",VoiceNetwork,"Voice Network",150,400,50,30);
	
	
	
	var mobile1 = document.createElement("div");
	mobile1.setAttribute("style","background: url('src/images/mobile.png');width:40px; height:60px;background-size:contain ; background-repeat: no-repeat;");
	mobile1.setAttribute("id","mobile1");
	myGraph.addVertices("mobile1",mobile1,"User A1",100,500,40,70);
	
	
	var div3 = document.createElement("div");
	var serviceProvider2 = document.createElement("div");
	serviceProvider2.setAttribute("style","background: url('src/images/serviceprovider1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div3.appendChild(serviceProvider2);
	var blueCloud2 = document.createElement("div");
	blueCloud2.setAttribute("style","background: url('src/images/bluecloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div3.appendChild(blueCloud2);	
	myGraph.addVertices("service2",div3,"",670,90,150,75);
	
	
	var div4 = document.createElement("div");
	var serviceProvider2 = document.createElement("div");
	serviceProvider2.setAttribute("style","background: url('src/images/comany1.png');width:50px; height:50px;background-size:contain ;position: fixed; background-repeat: no-repeat;");
	div4.appendChild(serviceProvider2);
	var blueCloud2 = document.createElement("div");
	blueCloud2.setAttribute("style","background: url('src/images/companycloud.png');width:150px; height:90px;background-size:contain ;background-repeat: no-repeat;");
	div4.appendChild(blueCloud2);
	myGraph.addVertices("company2",div4,"Company 2",700,250,150,100);
	
	
	var SignalingNetwork2 = document.createElement("div");
	SignalingNetwork2.setAttribute("style","background: url('src/images/arrow.png');width:50px; height:30px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("signalingnw2",SignalingNetwork2,"Signaling Network",805,400,50,30);
	
	
	var VoiceNetwork2 = document.createElement("div");
	VoiceNetwork2.setAttribute("style","background: url('src/images/arrow.png');width:50px; height:30px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("voicenw2",VoiceNetwork2,"Voice Network",680,400,50,30);
	
	
	var cscf = document.createElement("div");
	cscf.setAttribute("style","background: url('src/images/cscfs.png');width:200px; height:120px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("cscf",cscf,"",335,200,185,90);
	
	
	var mmtel = document.createElement("div");
	mmtel.setAttribute("style","background: url('src/images/mmtel.png');width:100px; height:60px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("mmtel",mmtel,"",245,10,100,60);
	
	var bcs = document.createElement("div");
	bcs.setAttribute("style","background: url('src/images/bcs.png');width:100px; height:50px;background-size:contain ; background-repeat: no-repeat;");
	myGraph.addVertices("bcs",bcs,"",545,10,100,50);
	
	
	myGraph.addDualThickEdge(VertexName.Company1,VertexName.Service1);
	myGraph.addDualThickEdge(VertexName.VoiceNetwork1,VertexName.Company1);
	myGraph.addDualThickEdge(VertexName.Company2,VertexName.Service2);
	myGraph.addDualThickEdge(VertexName.VoiceNetwork2,VertexName.Company2);
	
	function addUser(x,y,vertexId){
		var mobile1 = document.createElement("div");
		mobile1.setAttribute("style","background: url('src/images/mobile.png');width:40px; height:60px;background-size:contain ; background-repeat: no-repeat;");
		mobile1.setAttribute("id","mobile1");
		myGraph.addVertices("mobileB"+vertexId,mobile1,"User B"+vertexId,x,y,40,70);
	
	}
	
	addUser(680,500,2);
	addUser(770,500,1);
	
	var callButton = document.createElement("button");
	/*callButton.setAttribute("type","button");*/
	callButton.innerHTML = "Call";
	myGraph.addVertices("callBtn",callButton,"",90,570,50,20);
	
	
	var sequence = [
					function(i){myGraph.addSimpleEdge(VertexName.Mobile1,VertexName.SignallingNetwork1,i,i+1);},
					function(i){myGraph.addSimpleEdge(VertexName.SignallingNetwork1,VertexName.Company1,i,i+1);},
					function(i){myGraph.addSimpleEdge(VertexName.Company1,VertexName.CSCFNode,i,i+1);},
					function(i){myGraph.addSimpleEdge(VertexName.CSCFNode,VertexName.MMTel_AS,i,'{Rule Check}',new mxPoint(240, 200));},
					function(i){myGraph.addSimpleEdge(VertexName.MMTel_AS,VertexName.BCS,i,"{Business Logic}");},
					function(i){myGraph.addSimpleEdge(VertexName.MMTel_AS,VertexName.CSCFNode,i,"{Diversion Rule configured}");},
					function(i){myGraph.addSimpleEdge(VertexName.CSCFNode,VertexName.Company2,i,"Call "+json[0].divertedValue);},
					function(i){myGraph.addSimpleEdge(VertexName.Company2,VertexName.SignallingNetwork2,i,i+1);},
					function(i){myGraph.addSimpleEdge(VertexName.SignallingNetwork2,"mobileB2",i,i+1);},
					function(i){myGraph.addSimpleEdge("mobileB2",VertexName.VoiceNetwork2,i,i+1);
					myGraph.addSimpleEdge(VertexName.Mobile1,VertexName.VoiceNetwork1,i+1,i+1);
					myGraph.addDualThickEdge(VertexName.Mobile1,"mobileB2","Diverted Call in Progress");
					},
					
					];
	
	
	//myGraph.addSimpleEdge(VertexName.Mobile1,VertexName.Company1,'simple1','2');//new mxPoint(50, 330)
	
	
	myGraph.setEventonButton(function(){var k =0;setInterval(function () { if(k<sequence.length) {sequence[k](k);k++;} }, 1000);});
	
	
	
	
}

