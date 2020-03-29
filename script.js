//Question 1
const cat = {
  complain: function() {
    console.log("Meow!");
  }
};

//Question 2
const heading3 = document.querySelector("h3");
console.dir(heading);

//Question 3
heading3.style.fontSize = "2em";

//Question 4
heading3.classList.add("subheading");
console.log(heading3.className);

//Question 5
const paragraph = document.querySelectorAll("p");

//Question 6, 7
function cats(catArray) {
  console.log(catArray);
  for (let i = 0; i < catArray.length; i++) {
    const cats = "<h5>" + catArray[i].name + "</h5>";
    console.log(catArray[i]);
  }
}

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];
console.log(cats);

//Question 8
function cats(catArray) {
  console.log(catArray);
  for (let i = 0; i < catArray.length; i++) {
    const cats = "<h5>" + catArray[i].name + "</h5>";
    console.log(catArray[i]);
  }
}

//Question 9
I didnt understand what I am supposed to do

//Question 10
I didnt understand what I am supposed to do