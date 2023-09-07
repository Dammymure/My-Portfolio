const demobtn = document.getElementById("demo-btn");
const popup = document.querySelector(".popup-1"); // Use querySelector instead of getElementsByClassName
const closepop = document.getElementById("close-btn");

demobtn.addEventListener("click", () => {
 popup.classList.remove('hidden');
 console.log("open");
});

closepop.addEventListener("click", () => {
 popup.classList.add('hidden');
 console.log("close");
});


const demobtn2 = document.getElementById("demo-btn2");
const popup2 = document.querySelector(".popup-2"); // Use querySelector instead of getElementsByClassName
const closepop2 = document.getElementById("close-btn2");

demobtn2.addEventListener("click", () => {
 popup2.classList.remove('hidden');
 console.log("open");
});

closepop2.addEventListener("click", () => {
 popup2.classList.add('hidden');
 console.log("close");
});