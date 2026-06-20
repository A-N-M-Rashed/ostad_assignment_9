//1. Select an element using:
const heading = document.getElementById("heading").textContent;
console.log("heading: " + heading);

const lastSkill = document.querySelector(".skills li:nth-child(3)");
console.log("lastSkill: " + lastSkill.textContent);


const skills = document.querySelectorAll(".skills li");
for (skill of skills) {
    console.log("List of skills:" + skill.textContent);
}
//End of Question 1

//2. Change:
document.querySelector('#textUpdate').textContent = "Hi! The text is changed.";
document.querySelector('#tagUpdate').innerHTML = "Something <em>emphasized</em>";
document.body.style.backgroundColor = 'burlywood';
//End of Question 2

//3. Create and append new elements dynamically.
let p = document.createElement("p");
document.querySelector(".container").append("Appended paragraph", p);
//End of Question 3

// Remove an element from the DOM.
const element = document.getElementById("remove_p");
element.remove();
//End of Question 4

//5. Add event listeners:
const inputText = document.getElementById("inputText");
inputText.addEventListener("click", alertUser);

function alertUser() {
    alert("Enter your Name");
}


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    const inputVal = document.getElementById("inputText").value;
    alert("Submitted Val: "+ inputVal);
    document.getElementById("inputText").value = "";
})
