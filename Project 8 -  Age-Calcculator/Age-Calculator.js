const inputbtn = document.querySelector(".input-dob");
const calculatebtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".result")

calculatebtn.addEventListener("click", () => {
    if (inputbtn.value === "") {
        alert("Please Enter Your Date Of Birth");
    } else {
        console.log("input", inputbtn.value);
        const dob = new Date(inputbtn.value)
        console.log("dob", dob);
        const dob_year = dob.getFullYear();
        console.log("dob_year", dob_year);

        // curent Date
        const now = new Date();
        console.log("now", now);
        const now_year = now.getFullYear();
        console.log("now_year", now_year);
        const age = now_year - dob_year;
        console.log("age", age);
        result.innerHTML = `Your Age is ${age} years`;
    }
});
