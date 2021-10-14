const unordered = document.querySelector('ul');
const entered = document.querySelector('input');
const add = document.querySelector('button');
entered.addEventListener('keypress', function (x) { if (x.key === 'Enter') { add.click(); } });
add.addEventListener('click', function () {
  itemText = entered.value;
  //      alert(itemText);
  entered.value = "";
  if (itemText != "") {
    const listItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");
    listItem.appendChild(newSpan);
    listItem.appendChild(newButton);
    newSpan.innerText = itemText;
    newButton.innerText = "❌";
    unordered.appendChild(listItem);
    newButton.onclick = function () { unordered.removeChild(listItem); }
    entered.focus();
  }
});
