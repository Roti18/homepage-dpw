var grid = document.querySelector(".grid");
var pckry = new Packery(grid, {
  itemSelector: ".grid-item",
  gutter: 10,
});

pckry.getItemElements().forEach(function (itemElem) {
  var draggie = new Draggabilly(itemElem);
  pckry.bindDraggabillyEvents(draggie);
});
