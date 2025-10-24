const submit = document.getElementById("submit");
const container = document.getElementById("container");
const button = document.getElementById("button");

submit.addEventListener('click', () => {
  submit.classList.add("hidden");
  container.classList.remove("hidden");
});

button.addEventListener('click', () => {
  container.classList.add("hidden");
  submit.classList.remove("hidden");
});
