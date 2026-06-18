let btn = document.getElementById("btn");
let alert = document.querySelector(".status-box .alert p");
let msg = document.querySelector(".msg p");

btn.addEventListener("click", () => {
    let cname = document.getElementById("customerName").value;
    let product = document.getElementById("productSelect").value;

     msg.innerText = "";

    if (!cname || !product) {
        alert.innerText = "Please enter your name and select a product!";
        return;
    } else {
        alert.innerText = "Processing your order....";
    }
    

    setTimeout(() => {
        alert.innerText = "";
        msg.innerText = `Thank you ${cname}, your order for ${product} has been confirmed!`;
    },3000);
});
