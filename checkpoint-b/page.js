// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach(item => {
    const tile = document.createElement("li");

    tile.classList.add("tile");
    tile.textContent = `${item.name} - ${item.price} EGP`;

    listElement.append(tile);
  });
}

export function matching() {
  return items.filter(item => item.category === "bags");
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}