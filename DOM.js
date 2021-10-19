 /*
What is DOM :
​  
The Document Object Model (DOM) is a programming interface
for web documents.
It represents the page so that programs can change
the document structure, style, and content. 
The DOM represents the document as nodes and objects;
that way, programming languages can interact with the page.
​
*/
​
​
/*
The Document method querySelector() returns
the first Element within the document that matches
the specified selector, or group of selectors.
If no matches are found, null is returned.
​
​
The Document method querySelectorAll() returns a static 
NodeList representing a list of the document's elements
that match the specified group of selectors.
​
selector can be :
1 - tag name querySelector("div")
2- class name querySelector(".className")
3- ID  querySelector("#ID")
*/
​
/*------------------------------------------------------*/
/*
Modifying HTML Attributes
it is possible to access all of the attributes
​
*/
​
​
// document.querySelector("p")
// const pragraph = document.querySelector("p")
// pragraph.class = "text";
// pragraph.style.color = "red";
// pragraph.innerHTML = "text";
// console.log(pragraph);
​
​
// const pragraphs = document.querySelectorAll("p")
// // console.log(pragraphs);
​
// for (let i = 0; i < pragraphs.length; i++) {
//   pragraphs[i].style.color = "red";
//   pragraphs[i].innerHTML = "edited text";
// }
​
​
// const navBar = document.querySelector(".navBar");
// // console.log(navBar);
// navBar.style.color = "red" 
​
// const items = document.querySelectorAll("li")
// items.forEach((element)=>{
//     element.style.display = "inline-block";
// })
​
// const firstLink = document.querySelector("#firstLink");
// firstLink.href = "https://www.w3schools.com/Jsref/prop_style_display.asp";
// ​ينقله الى صفحة w3school 
/* ---------------------------------------------------*/
​
/*
Creating and Removing HTML Elements :
​
​
to create a new html element use `document.createElement`
and pass in the name of the tag you want to create.
​
​
you can modify the newly created element's attributes
by accessing it and changing the attributes for the values
​
​
​
in order to add it as a child for another element,
use the `append` method
​
​
​
​
to remove the element use the `remove` method
​
*/
​
// const newP = document.createElement("p");
// newP.innerHTML = "this is the new pragraph";
// newP.style.color="#440012"
// const textContainer = document.getElementById("textContainer");
​
​
// textContainer.append(newP);
​
// newP.remove();
// newP.style.display = "none"
​
​
​
​
​
/* -----------------------------------------------------*/
​
/*
Event Listeners
Event listeners are connected to the DOM and can execute
code depending on which event has triggered.
An example of these events would be
click, change, hover, key press, etc.
​
Examples on add and use  event listeners with DOM
*/
​
// const btn1 = document.querySelector("#btn1");
​
​
//////////////////////////////////
// const fun1 = () => {
//     const input1 = document.querySelector("#input1");
//     if (input1.value.length){
//   const newP = document.createElement("p");
//   newP.innerHTML = input1.value;
//   const container = document.querySelector(".container");
//   container.append(newP);
//   input1.value = "";
//     }
​
// };
​
// const func2  = ()=>{
//     console.log("input change");
// }
​
/////////////////////////////
​
// const input1 = document.querySelector("#input1");
// input1.addEventListener("change", func2);
​
​
​
//mouseenter
//mouseleave
// const changeColors = ()=>{
    // document.querySelector("p").style.color="green";
// }
​
// document.querySelector("p").addEventListener("mouseenter",changeColors);
​
​
// const clicked = (e)=>{
//     console.log(e.target); 
// }
​
// const buttons = document.querySelectorAll("button")
// buttons.forEach((ele)=>{
//     ele.addEventListener("click",clicked);
// });