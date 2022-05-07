"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getElementPosition;
/*
 * Finds element's position relative to the whole document,
 * rather than to the viewport as it is the case with .getBoundingClientRect().
 */
function getElementPosition(element) {
  var rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}