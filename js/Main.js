function Main(graphDiv){
	this.graphDiv = graphDiv;
};
Main.prototype.graphObj = null;


Main.prototype.init = function(){
	var localObj = this;
	//console.log(localObj.graphDiv);
	localObj.graphObj = localObj.addMxGraphcontainer(localObj.graphDiv);
	localObj.overrideMethods();
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
	localObj.graphObj.setConnectable(true);
	localObj.graphObj.getModel().beginUpdate();
	try{
		var v1 = localObj.graphObj.insertVertex(parent, "service", 'Bottom', 60, 60, 60, 60,
				prefix+'verticalLabelPosition=bottom;verticalAlign=top');
		var v2 = localObj.graphObj.insertVertex(parent, "43", 'Top', 140, 60, 60, 60,
					prefix+'verticalLabelPosition=top;verticalAlign=bottom');
		var v3 = localObj.graphObj.insertVertex(parent, null, 'Left', 60, 160, 60, 60,
					prefix+'labelPosition=left;align=right');
		var v4 = localObj.graphObj.insertVertex(parent, "service2", '', 140, 160, 60, 60);
		localObj.graphObj.insertEdge(parent, null, '', v1, v2);
	}
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}
};

Main.prototype.overrideMethods = function(){
	var localObj = this;
	localObj.graphObj.setHtmlLabels(true);
	
	localObj.graphObj.isCellEditable = function(cell)
	{
		return !localObj.graphObj.getModel().isEdge(cell);
	};
	
	var getLabel2 = localObj.graphObj.getLabel;
	localObj.graphObj.getLabel = function(cell){
		if (localObj.graphObj.getModel().isVertex(cell)){
			if(cell.id=="service2"){
				return '<div style="height:60px;width:60px;background: url(\'src/images/heart.png\');"></div>';
				//background: url("editors/images/grid.gif")
			}else{
				getLabel2.apply(this, arguments);
			}
		}else{
			getLabel2.apply(this, arguments);
		}
	}
	
};
