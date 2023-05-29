function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}

function scrollToNode(node) {
  window.scroll(0, findPosition(node) - 200);
}

function onSearch(event) {
  if (event.key === "Enter" || event.type === "click") {
    const filteredNodes = allTitleWordsNodes.filter(
      (node) => node.innerText.indexOf(searchBoxNode.value) !== -1
    );

    scrollToNode(filteredNodes[0]);
    filteredNodes[0].style.background = "yellow";
  }
}

const titleSelector = ".container .title";

const searchBoxNode = document.querySelector("#edit-title");
const searchButtonNode = document.querySelector("#edit-submit-vocabulary");

const allTitleWordsNodes = [...document.querySelectorAll(titleSelector)];

searchBoxNode.addEventListener("keydown", onSearch);
searchButtonNode.addEventListener("click", onSearch);
