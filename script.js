const count = document.querySelector('.count');
const input = document.querySelector('input');

input.addEventListener("keyup", () => {
    const name = input.value;
    count.innerHTML = name.length;
});