// Team HairyCrabs: Carlos Hernandez and Dean Carey
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
// Actually it's ctrl-shift-k in firefox - smh
console.log("AYO");

// old js notation to assign a varriable - var
// new versions now use const and let
// const is for immutable values
// let is for values that will change
var i = "hello";
var j = 20;

// assign an anonymous fxn to a var
// functional style
var f = function (x) {
  // j is in the scope of f
  var j = 30;
  return j + x;
};

//instantiate an object
// o is a JSON
// I remember something saying that every object in JS is actually a hashtable
// which means that a js object is actually just an abstractions
var o = {
  name: "Thluffy",
  age: 15,
  items: [10, 20, 30, 40],
  // an object inside an object
  morestuff: { a: 1, b: "ayo" },
  // I think this is how you made functions for an object in old js
  // now there are more and better ways to do this
  func: function (x) {
    return x + 30;
  },
};

//(define fact (lambda (n) ...)
// wow you really like lisp
// wow you really made us do a function so you can show the solution later
var fact = function (n) {
  var prod = 1;
  // no initializer
  for (; n > 1; n--) {
    prod = prod * n;
  }
  return prod;
};

//(define fact (lambda (n) ...)
var factR = function (n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factR(n - 1);
  }
};

// function to change html by using js
// you can also use =>
var addItem = function (text) {
  // using this we append to the element with ID "thelist" with new `text` inside a li
  var list = document.getElementById("thelist");
  // create a new tag into the dom
  // newitem is an alias
  var newitem = document.createElement("li");
  // innerHTML allows us to change the text inside a tag
  newitem.innerHTML = text;
  // we append to the "list"
  list.appendChild(newitem);
};

// gets all elements with html tag "li" and deletes the nth one
var removeItem = function (n) {
  var listitems = document.getElementsByTagName("li");
  listitems[n].remove();
};

// for every li html tag we add red to the classlist
var red = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    // classlist: readonly -  allows for manipulation of element's class content attribute
    // basically this would be equal to <li class="red">
    // and now the css will be applied here
    items[i].classList.add("red");
  }
};

var stripe = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    // assign a different class if odd or even
    if (i % 2 == 0) {
      items[i].classList.add("red");
    } else {
      items[i].classList.add("blue");
    }
  }
};

// prints to console info about a button
var buttonCallback = function (e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  // results in an error
  console.log(this);
};

// for all elements that have id b we call the buttonCallback function
var b = document.getElementById("b");
b.addEventListener("click", buttonCallback);

// this refers to the element
// prints info about the li tag
var redCallback = function (e) {
  console.log("\n\n---redCallback invoked---");
  console.log(this);
  this.classList.add("red");
};

var thelist = document.getElementById("thelist");
// all the children in this list
// the dom is like a tree
// and every node has children
var litems = thelist.children;
// for every children we add the redCallback function with a listen to 
// see when we can change the color of the list item
for (var i = 0; i < litems.length; i++) {
  litems[i].addEventListener("click", redCallback);
  litems[i].addEventListener("mouseover", function (e) {
    console.log("user has moved into this:" + this);
    this.classList.toggle("green");
  });
  litems[i].addEventListener("mouseout", function (e) {
    console.log("user has moved out of this:" + this);
    this.classList.toggle("blue");
  });
}
