import { getProducts } from "./database.js";

const products = getProducts();

//event listener to display the items price when clicked

document.addEventListener("click", (clickEvent) => {
  //establish a variable to store the value of the target clicked.
  const itemClicked = clickEvent.target;

  // Was an product list item clicked
  if (itemClicked.dataset.type === "product") {
    window.alert(
      `${itemClicked.dataset.name} costs $ ${parseFloat(
        itemClicked.dataset.price
      ).toFixed(2)}.`
    );
  }
});

export const Products = () => {
  let html = `<ul>`;

  for (const product of products) {
    html += `<li data-id="${product.id}"
                data-price="${product.price}"
                data-type="product"
                data-name="${product.name}">
                ${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
