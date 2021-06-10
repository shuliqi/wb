import _ from "loadsh";
import "./style.css";
import img from "./1.png"
import data from "./i";
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  var myIcon = document.createElement('img');
  myIcon.classList.add("img")
  myIcon.src = img;
  element.appendChild(myIcon);
  console.log(data)


  return element;
}

document.body.appendChild(component());
