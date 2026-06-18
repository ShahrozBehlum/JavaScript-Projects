let input = document.querySelector("#text");
let add_btn = document.querySelector("#add-task");
let list = document.querySelector("#List");
let body = document.querySelector(".app-body");


add_btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        list.appendChild(checkbox);
        let newlist = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = "X";
        newlist.textContent = input.value;
        list.appendChild(newlist);
        list.appendChild(span);
        input.value = "";
        span.addEventListener("click", () => {
            list.removeChild(newlist);
            list.removeChild(span);
            list.removeChild(checkbox);
        });

        checkbox.addEventListener("click", () => {
            if (checkbox.checked === true) {
                newlist.style.textDecoration = "line-through";
            }
            else {
                newlist.style.textDecoration = "none";
            }
        });
    } else {
        alert("Please enter a task!");
    }
});

