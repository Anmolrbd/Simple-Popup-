const submit = document.getElementById("submit");
const container = document.getElementById("container");
const button = document.getElementById("button");

submit.addEventListener('click', () => {
    
    container.classList.remove("animate-slideDownScale");
    container.classList.add("animate-slideDownScale");
    submit.classList.add("hidden");
    container.classList.remove("hidden");
});

button.addEventListener('click', () => {
  container.classList.add("hidden");
  submit.classList.remove("hidden");
});
