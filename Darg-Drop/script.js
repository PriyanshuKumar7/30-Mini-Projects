let lists = document.getElementsByClassName("list");
let rightbox = document.querySelector(".right");
let leftbox = document.querySelector(".left");
let selected = null; 

// Make draggable items work
for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
}

// Allow dropping on right box
rightbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Handle drop on right box
rightbox.addEventListener("drop", function (e) {
  if (selected) {
    rightbox.appendChild(selected);
    selected = null;
  }
});

// Allow dropping on left box
leftbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Handle drop on left box
leftbox.addEventListener("drop", function (e) {
  if (selected) {
    leftbox.appendChild(selected);
    selected = null;
  }
});
