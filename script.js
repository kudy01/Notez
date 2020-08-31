var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var delButton = document.getElementsByClassName("delete");


//click on a list item and it strikethroughs the text

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

// to delete elements
for(var i = 0; i < delButton.length; i++){ 
	delButton[i].addEventListener("click", removeParent);
}



//from StackOverflow:
function removeParent(event) {

  event.target.parentNode.remove();
}


function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement("button");
	
	//using onclick feature to delete, as new elements created dont have a class
	newButton.onclick = removeParent;
	newButton.innerHTML = "Delete";
	li.appendChild(document.createTextNode(input.value));
	
	// to add a space before the button
	var textSpace = document.createTextNode(" ");
	li.appendChild(textSpace);
	
	// to add a new button to delete
	li.appendChild(newButton); 
	ul.appendChild(li);
	input.value = "";
}

function inputLength() {
	return input.value.length;
}



// function to add elements after click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// function to add elements after keypress = enter key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

