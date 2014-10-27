(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define('qtip', [], factory);
    }
    else {
        root.qtip = factory();
    }
}(this, function() {
var qtip;

qtip = (function() {
  var div, filter, hide, options, show;
  div = null;
  options = {
    dataAttribute: 'data-qtip',
    id: 'qtip',
    visibleClass: 'visible'
  };
  filter = function(element) {
    var data, parent, title;
    title = element.hasAttribute('title');
    data = element.hasAttribute(options.dataAttribute);
    parent = element.parentNode;
    if (title && data) {
      return element;
    }
    if (parent && 'hasAttribute' in parent && 'getBoundingClientRect' in parent) {
      return filter(parent);
    }
  };
  hide = function(event) {
    if (filter(event.target)) {
      return div.classList.remove(options.visibleClass);
    }
  };
  show = function(event) {
    var element, left, offset, top;
    element = filter(event.target);
    if (element) {
      event.preventDefault();
      offset = element.getBoundingClientRect();
      div.innerHTML = element.getAttribute('title');
      left = offset.left + (element.offsetWidth - div.offsetWidth) / 2;
      top = offset.top - div.offsetHeight - 10;
      div.style.cssText = "left: " + left + "px;\ntop: " + top + "px;";
      return div.classList.add(options.visibleClass);
    }
  };
  return (function() {
    div = document.createElement('div');
    div.id = options.id;
    document.body.appendChild(div);
    document.addEventListener('touchstart', show);
    document.addEventListener('touchend', hide);
    document.addEventListener('mousedown', show);
    return document.addEventListener('mouseup', hide);
  })();
})();

    return qtip;
}));
