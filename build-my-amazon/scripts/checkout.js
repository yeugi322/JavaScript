import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
    new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});


// new Promise((resolve) => {
//     loadProducts(()=>{
//         resolve();
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });
    
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// loadProducts(()=>{
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
    
// });
