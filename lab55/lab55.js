console.log("Lab 55");

const btn = document.getElementById("submit");
const input = document.getElementById("nameInput");
const output = document.getElementById("nameOutput");
btn.addEventListener("click", () => {
  localStorage.setItem("currentname", input.value);
  output.innerHTML = `<b>${localStorage.getItem("currentname")}<b/>`;
});
