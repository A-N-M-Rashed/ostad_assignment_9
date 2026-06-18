//1. Select an element using:
const heading = document.getElementById("heading").textContent;
console.log("heading: "+ heading);

const lastSkill=document.querySelector(".skills li:nth-child(3)");
console.log("lastSkill: "+ lastSkill.textContent);


const skills= document.querySelectorAll(".skills li");
for(skill of skills){
    console.log("List of skills:" + skill.textContent);
}
//End of Question 1

//2. Change:
document.querySelector('#textUpdate').textContent= "Hi! The text is changed.";
document.querySelector('#tagUpdate').innerHTML= "Something <em>emphasized</em>";
document.body.style.backgroundColor= 'burlywood';
//End of Question 2
