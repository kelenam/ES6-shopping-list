const list = document.getElementById("list");
const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("addButton");

class Item {
    constructor(itemName) {
        this.item = itemName;
        this.create()
    }
    create() {
        // creating list elements.
        const listItem = document.createElement("div");
        listItem.classList.add("list-item")

        const input = document.createElement("input");
        input.setAttribute("disabled", true)
        input.classList.add("item-name")
        input.value = this.item;

        const actions = document.createElement("div");
        actions.classList.add("item-actions");

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update");
        updateButton.addEventListener("click", () => this.update(input));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        removeButton.addEventListener("click", () => this.remove(listItem));

        actions.appendChild(updateButton);
        actions.appendChild(removeButton);
        listItem.appendChild(input);
        listItem.appendChild(actions);
        list.appendChild(listItem);
    }
    update(input) {
        input.disabled = !input.disabled;
    }
    remove(listItem) {
        listItem.parentNode.removeChild(listItem);
    }
}

addButton.addEventListener("click", () => newItem());

function newItem() {
    console.log(itemToAdd.value);
    itemToAdd.value !== "" ? new Item(itemToAdd.value) : console.log("Please enter an item");
    itemToAdd.value = "";
}