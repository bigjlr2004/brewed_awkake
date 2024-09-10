import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (clickEvent) => {
  //establish a variable to store the value of the target clicked.
  const itemClicked = clickEvent.target;
  let itemsSold = 0;

  // Was an product list item clicked
  if (itemClicked.dataset.type === "employee") {
    for (const order of orders) {
      if (order.employeeId === parseInt(itemClicked.dataset.id)) {
        itemsSold += 1;
      }
    }
    window.alert(`${itemClicked.dataset.name} sold ${itemsSold} products.`);
  }
});

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-id="${employee.id}" 
                data-name="${employee.name}"
                data-type="employee"
                >${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
