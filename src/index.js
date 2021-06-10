import _ from "loadsh";
import printMe from './print.js'
function component() {
  const element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  btn.innerHTML = "点击我";
  btn.onclick = printMe;
  element.append(btn);
  
  return element;
}

document.body.appendChild(component());
