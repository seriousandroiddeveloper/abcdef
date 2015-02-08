function Main(graphDiv){
	this.graphDiv = graphDiv;
};
Main.prototype.graphObj = null;

Main.prototype.verticesandHTMLmap = new eHashTable();

Main.prototype.nameAndVertexmap = new eHashTable();

Main.prototype.iDandLabelNamemap = new eHashTable();

Main.prototype.init = function(){
	var localObj = this;
	
	localObj.verticesandHTMLmap.clear();
	localObj.nameAndVertexmap.clear();
	localObj.iDandLabelNamemap.clear();
	//console.log(localObj.graphDiv);
	localObj.graphObj = localObj.addMxGraphcontainer(localObj.graphDiv);
	localObj.graphObj .stylesheet.getDefaultVertexStyle()[mxConstants.STYLE_FILLCOLOR] = 'white';
	localObj.graphObj .stylesheet.getDefaultVertexStyle()[mxConstants.OUTLINE_COLOR] = 'white';
	localObj.graphObj .stylesheet.getDefaultVertexStyle()[mxConstants.STYLE_STROKECOLOR] = 'white';
	
	
	localObj.overrideMethods();
	localObj.loadgraph();
};

Main.prototype.addMxGraphcontainer = function(div){
	var localObj = this;
	return new mxGraph(div);
};

Main.prototype.loadgraph = function(){
	var localObj = this;
	
	//var prefix = 'shape=image;image=src/images/heart.png;';
	localObj.graphObj.setConnectable(true);
	localObj.graphObj.setCellsResizable(false);
	localObj.graphObj.setCellsMovable(true);
	localObj.graphObj.setEnabled(true);
	
	/*localObj.graphObj.getModel().beginUpdate();
	try{
		var v1 = localObj.graphObj.insertVertex(parent, "service", 'Bottom', 60, 60, 60, 60,
				prefix+'verticalLabelPosition=bottom;verticalAlign=top');
		var v2 = localObj.graphObj.insertVertex(parent, "43", 'Top', 240, 60, 60, 60,
					prefix+'verticalLabelPosition=top;verticalAlign=bottom');
		var v3 = localObj.graphObj.insertVertex(parent, null, 'Left', 60, 160, 60, 60,
					prefix+'labelPosition=left;align=right');
		var v4 = localObj.graphObj.insertVertex(parent, "service2", '', 140, 160, 60, 60);
		localObj.graphObj.insertEdge(parent, null, '', v1, v2);
		
	}
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}*/
	
	
	
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
			
			if(localObj.verticesandHTMLmap.hasItem(cell.id)){
				
				return localObj.verticesandHTMLmap.getItem(cell.id);
			}else{
				getLabel2.apply(this, arguments);
			}
		}else{
			/*if(localObj.iDandLabelNamemap.hasItem(cell.id)){
				
				return null;//'<div class="vertexstyle">'+localObj.iDandLabelNamemap.getItem(cell.id)+'</div>';
			}else{
				//getLabel2.apply(this, arguments);
			}*/
			return getLabel2.apply(this, arguments);
			
		}
	}
	
	
	/*localObj.graphObj.getAllConnectionConstraints = function(terminal)
	{
		if (terminal != null && this.model.isVertex(terminal.cell))
		{
			return [new mxConnectionConstraint(new mxPoint(0, 0), true),
		    	new mxConnectionConstraint(new mxPoint(0.5, 0), true),
		    	new mxConnectionConstraint(new mxPoint(1, 0), true),
		    	new mxConnectionConstraint(new mxPoint(0, 0.5), true),
				new mxConnectionConstraint(new mxPoint(1, 0.5), true),
				new mxConnectionConstraint(new mxPoint(0, 1), true),
				new mxConnectionConstraint(new mxPoint(0.5, 1), true),
				new mxConnectionConstraint(new mxPoint(1, 1), true)];
		}

		return null;
	};*/
	
	
};



Main.prototype.addVertices = function(ID, HTMLDIV, Label,x,y,width,height){
	var localObj = this;
	if(!localObj.verticesandHTMLmap.hasItem(ID)){
		
		var div = document.createElement("div");
		div.appendChild(HTMLDIV);
		var label = document.createElement("Label");
		label.innerHTML = Label;
		label.setAttribute("class","vertices_label");
		div.appendChild(label);
		
		localObj.verticesandHTMLmap.setItem(ID,div);
		
		var parent = localObj.graphObj.getDefaultParent();
		
		localObj.graphObj.getModel().beginUpdate();	
		try{
			var vertexObj = localObj.graphObj.insertVertex(parent, ID, '', x, y, width, height);
			
			
		}
		
		finally
		{
			localObj.graphObj.getModel().endUpdate();
		}
		localObj.nameAndVertexmap.setItem(ID,vertexObj);
	}else{
		throw {
			message:"Vertices ID must be unquie "
		};
	}
};

Main.prototype.addSimpleEdge = function(vertex1,vertex2, id, Label, point){
	var localObj = this;
	
	var parent = localObj.graphObj.getDefaultParent();
	localObj.iDandLabelNamemap.setItem(id, Label);
	localObj.graphObj.getModel().beginUpdate();	
	try{
		
		var edge =localObj.graphObj.insertEdge(parent, id, Label, localObj.nameAndVertexmap.getItem(vertex1), localObj.nameAndVertexmap.getItem(vertex2),'labelBackgroundColor=white;fontStyle=1;fillColor=black;strokeColor=black');
		if(point != undefined ){
			edge.geometry.points = [point];
		}
	}
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}
	
};


Main.prototype.addThickEdge = function(vertex1,vertex2, Label){
	var localObj = this;
	
	var parent = localObj.graphObj.getDefaultParent();
	
	localObj.graphObj.getModel().beginUpdate();	
	try{
		 var e1 = localObj.graphObj.insertEdge(parent, null, Label, localObj.nameAndVertexmap.getItem(vertex1), localObj.nameAndVertexmap.getItem(vertex2), 'perimeterSpacing=4;strokeWidth=4;labelBackgroundColor=white;fontStyle=1;strokeColor=black');
		
	}
	
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}
	
};


Main.prototype.addDualThickEdge = function(vertex1,vertex2, Label){
	var localObj = this;
	
	var parent = localObj.graphObj.getDefaultParent();
	
	localObj.graphObj.getModel().beginUpdate();	
	try{
		 var e1 = localObj.graphObj.insertEdge(parent, null, Label, localObj.nameAndVertexmap.getItem(vertex1), localObj.nameAndVertexmap.getItem(vertex2), 'perimeterSpacing=4;strokeWidth=4;labelBackgroundColor=white;fontStyle=1;strokeColor=black');
		 var e2 = localObj.graphObj.insertEdge(parent, null, Label, localObj.nameAndVertexmap.getItem(vertex2), localObj.nameAndVertexmap.getItem(vertex1), 'perimeterSpacing=4;strokeWidth=4;labelBackgroundColor=white;fontStyle=1;strokeColor=black');
	}
	
	finally
	{
		localObj.graphObj.getModel().endUpdate();
	}
	
};
