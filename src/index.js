// import _ from "loadsh";
// import printMe from './print.js'
// function component() {
//   const element = document.createElement('div');
//   var btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add("hello");

//   btn.innerHTML = "点击我";
//   btn.onclick = printMe;
//   element.append(btn);
  
//   return element;
// }

// document.body.appendChild(component());



import "./hmr.css";

let webContent = document.getElementById('webContent');

// 增加一个按钮
let btn = document.createElement('button');
btn.innerText = '增加';
webContent.appendChild(btn);

// 每次点击按钮就向页面中增加一个div元素
let count = 0;
btn.addEventListener('click', () => {
    let div = document.createElement('div');
    div.innerText = count++;
    webContent.appendChild(div);
});