

const headings = document.querySelectorAll("h2");
const paragraphs = document.querySelectorAll("p");
const first_Image = document.getElementById("fimg");
const second_Image = document.getElementById("mimg");
const last_Image = document.getElementById("limg");
const textinput = document.getElementById("textinput");
const submitbtn = document.getElementById("submit");

const btn1 = document.getElementById("b1");
btn1.addEventListener("click", () => {
  headings.forEach((element) => {
    element.style.fontSize = "39pt";
  });
});

const btn2 = document.getElementById("b2");
btn2.addEventListener("click", () => {
  paragraphs.forEach((element) => {
    element.style.color = "gray";
  });
});

const btn3 = document.getElementById("b3");
btn3.addEventListener("click", () => {
  paragraphs.forEach((element) => {
    element.style.backgroundColor = "pink";
  });
});

const btn4 = document.getElementById("b4");
btn4.addEventListener("click", () => { 
  fimg.style.visibility = "hidden";
});

const btn5 = document.getElementById("b5");
btn5.addEventListener("click", () => {
  if ( fimg.src != "./cute.jpg" ) 
          { fimg.src = "./cat.jpg";  limg.src =  "./cat.jpg"; } 
          else 
          { fimg.src = "./cat.jpg"; limg.src = "./cute.jpg"; }
});

last_Image.addEventListener("mouseenter", () => {
    last_Image.src = "./cat.jpg";
    last_Image.style.height = "150px";
});
last_Image.addEventListener("mouseleave", () => { 
    last_Image.src = "./cute.jpg"; } ); 

first_Image.addEventListener("contextmenu", () => {
  alert("why do you click me !");
});

submit.addEventListener("click", () => {
  if (textinput.value.length) {
    alert("Data is  saved !");
  } else {
    alert("Lable  is empty !"); 
  }  
}); 

window.onload = ()=>{ 
    alert("page loaded")
}

const n = document.querySelectorAll("p");
n.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "red";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "white";
  });  
}); 