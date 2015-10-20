var createElement = function(tagName, id, content) {
  var element = document.createElement(tagName);
  element.id = id;
  element.innerHTML = content;

  document.body.appendChild(element);
};
