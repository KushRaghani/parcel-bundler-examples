const container = document.querySelector('.container');

const todoJson = require('./todo.json');

const createElement = function(type, attrs) {
  var el = document.createElement(type);
  for (const i in attrs) {
    el[i] = attrs[i];
  }
  return el;
};

const htmlContent = createElement('div', {id: 'list-container'});
let htmlContent1 = '';
todoJson.forEach(function(entryPoint) {
  htmlContent1 += `<a href='#' style='display:block'>${entryPoint.text}</a>`;
});

htmlContent.innerHTML = htmlContent1;

container.appendChild(htmlContent);