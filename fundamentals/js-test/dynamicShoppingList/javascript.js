
function addItemToShoppingList(e, inp, shoppingList)
{
    e.preventDefault();
    const item = inp.value;
    inp.value = "";

    const listItem = document.createElement("li");
    const delButton = document.createElement("button");
    const spanItem = document.createElement("span");
    listItem.appendChild(spanItem);
    listItem.appendChild(delButton);

    spanItem.textContent = item;
    delButton.textContent = "Delete";
    delButton.classList = "delButton";

    shoppingList.appendChild(listItem);

    delButton.addEventListener("click", () => {
        listItem.parentNode.removeChild(listItem);
    });

    inp.focus();
}


const unList = document.querySelector("ul");
const inp = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => addItemToShoppingList(e, inp, unList));
