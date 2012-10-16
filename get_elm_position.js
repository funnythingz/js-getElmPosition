/**
* getElmPosition
* @example:
*   getElmPosition(elm).top
*   getElmPosition(elm).left
*/
var getElmPosition = function(elm){
  var left = 0,
      top = 0
  ;
  while(elm.parentNode){
    left += elm.offsetLeft;
    top += elm.offsetTop;
    elm = elm.parentNode;
  }
  return {'left': left, 'top': top};
}
