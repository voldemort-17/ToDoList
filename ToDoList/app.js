const inputBox = document.querySelector("#inputBox");
const addButton = document.querySelector("#addBtn");
const listBox = document.querySelector(".listCont");

addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listBox.appendChild(listItem);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
});

listBox.addEventListener('click', function (e) {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
});

