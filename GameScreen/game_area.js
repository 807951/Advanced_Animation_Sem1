function GameArea(){
  //  Wrapper Div
  this.wrapper = document.getElementById("wrapper");
  this.wrapper.setAttribute("style", "background-color:yellow; border: 5px solid black; width:900px; height:800px;");
  // create tileMenuDiv
  this.tileMenu = document.getElementById("tileMenu");
  this.tileMenu.setAttribute("style", "background-color:#033c4a; width:900px; height:100px; float:left;");

  this.tileMenu1 = document.getElementById("tileMenuDiv1");
  this.tileMenu1.setAttribute("style", "background-color:#033c4a; width:100px; height:100px; float:left;");

  for(let i = 0; i < this.tiles.length; i++){
        this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the PlayArea object
                                          this.style.backgroundColor = "#ac8fe3" 
                                        },
                                        false);

        this.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);

        this.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
  }

}

