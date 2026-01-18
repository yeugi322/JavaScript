// export const orders = JSON.parse(localStorage.getItem('orders')) || [];

// export function addOrder(order) {
//   orders.unshift(order);
//   saveToStorage();
// }

// function saveToStorage() {
//   localStorage.setItem('orders', JSON.stringify(orders));
// }

// const storedOrders = JSON.parse(localStorage.getItem('orders'));

// export const orders = Array.isArray(storedOrders) ? storedOrders : [];

// export function addOrder(order) {
//   orders.unshift(order);
//   saveToStorage();
// }

// function saveToStorage() {
//   localStorage.setItem('orders', JSON.stringify(orders));
// }


export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}
 
export function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if (order.id === orderId) {
      matchingOrder = order;
    }
  });

  return matchingOrder;
}
