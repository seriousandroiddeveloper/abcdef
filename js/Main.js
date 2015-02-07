function Main(graphDiv){
	this.graphDiv = graphDiv;
};
Main.prototype.graphObj = null;


Main.prototype.init = function(){
	var localObj = this;
	//console.log(localObj.graphDiv);
	localObj.graphObj = localObj.addMxGraphcontainer(localObj.graphDiv);
	localObj.loadgraph();
};

Main.prototype.addMxGraphcontainer = function(div){
	var localObj = this;
	return new mxGraph(div);
};

Main.prototype.loadgraph = function(){
	var localObj = this;
	var parent = localObj.graphObj.getDefaultParent();
	var prefix = 'shape=image;image=src/images/heart.png;';
	localObj.graphObj.getModel().beginUpdate();
	try{
		localObj.graphObj.insertVertex(parent, "service", 'Bottom', 60, 60, 60, 60,
				prefix+'verticalLabelPosition=bottom;verticalAlign=top');
		localObj.graphObj.insertVertex(parent, "43", 'Top', 140, 60, 60, 60,
					prefix+'verticalLabelPosition=top;verticalAlign=bottom');
		localObj.graphObj.insertVertex(parent, null, 'Left', 60, 160, 60, 60,
					prefix+'labelPosition=left;align=right');
		localObj.graphObj.insertVertex(parent, null, 'Right', 140, 160, 60, 60,
					prefix+'labelPosition=right;align=left');
	}
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}
};