//jshint esversion:8
// first wait for contect to load

window.addEventListener('DOMContentLoaded', setup);

function setup(){
  function createDots(){
    const canvas = document.getElementById('canvas');
    // save the height and width of the canvas
    const width = canvas.offsetWidth; // this with get width with padding and border
    const height = canvas.offsetHeight;
    const classes = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

    // fill the screen with the 20x20 divs
    for (var i = 0; i < width; i += 20){
      for(var j = 0; j < height; j += 20){
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('box');

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('dot');

        var random = Math.floor(Math.random() *  5);
        innerDiv.classList.add(classes[random]);

        outerDiv.appendChild(innerDiv);
        canvas.appendChild(outerDiv);
      }//endinn for


    }// end outta for

  }// end inner function

  createDots();

  //resize event and redraw dots to fill screen
  window.addEventListener('resize', createDots); // really slow tho
}//end main function
