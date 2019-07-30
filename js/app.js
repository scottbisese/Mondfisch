'use strict';
var roundCount = 0;

//Save initial text form on homepage to local storage, then clear html elements from homepage and render sketchpad, can set to start on event button click
//add event listener outside the function to run from form submit button (id="start) on index.html which starts game
function startGame() {
  saveForm();
  renderTextPhrase();
  renderSketchpad();
  renderNextFormBtn();
}
//rendering the canvas pad
function renderSketchpad() {
	var canvas = document.createElement("canvas");
	var div = document.getElementById("canvas");
		canvas.setAttribute('id', 'sketchpad');
		canvas.setAttribute('width', '500px');
		canvas.setAttribute('height', '500px');
		canvasSection.appendChild(canvas);
}



//Save sketchpad image to local storage - can store using canvas.toDataURL(), then clear sketchpad, render saved drawing as static image and render new text form
function generateTextFormPage() {
  saveDrawing();
  clearSketchpad();
  renderStaticImage();
  renderTextForm();
  renderNextSketchButton();
  renderEndBtn();
  roundcount++;
}

function generateSketchPadPage() {
  saveForm();
  clearForm();
  renderTextPhrase();
  renderSketchpad();
  renderNextFormBtn(); 
}

function endGame() {
  saveForm();
  clearForm();
  renderResults();
}

function saveForm() {
  var userInput = document.getElementById('phraseInput').value;
  localStorage.setItem('formPhrase' + roundCount, userInput);
}

function saveDrawing() {
  var userSketch = document.getElementById('sketchpad');
  localStorage.setItem('sketch' + roundCount, userSketch.toDataURL());
}

function clearSketchpad() {
  var sketchpad = document.getElementById('sketchpad');
  sketchpad.parentNode.removeChild(sketchpad);
}