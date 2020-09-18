// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
window.onload = init;

function init() {
	canvas
}

function GameArea(){
    	//  Wrapper Div
    	this.wrapperDiv = document.getElementById("wrapperDiv");
    	this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid black; width:900px; height:800px;");
    	// create tileMenuDiv
    	this.tileMenuDiv = document.createElement("div");
    	this.wrapperDiv.appendChild(this.tileMenuDiv);
    	this.tileMenuDiv.setAttribute("style", " background-color:#00FF00; width:900px; height:100px;float:right;");
	// create tileDivs
	this.tileDiv1 = document.createElement("div");
	this.tileMenuDiv.appendChild(this.tileDiv1);
	this.tileDiv1.setAttribute("style", " background-color:#FF0000; width:90px; height:90px;float:right;");

	this.tileDiv2 = document.createElement("div");
	this.tileMenuDiv.appendChild(this.tileDiv2);
	this.tileDiv2.setAttribute("style", " background-color:#FF0000; width:90px; height:90px;float:right;");

	this.tileDiv3 = document.createElement("div");
	this.tileMenuDiv.appendChild(this.tileDiv3);
	this.tileDiv3.setAttribute("style", " background-color:#FF0000; width:90px; height:90px;float:right;");
}
	
gameArea();