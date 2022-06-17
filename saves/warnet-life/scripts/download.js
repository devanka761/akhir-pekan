const wall = document.querySelector(".bahas.unduh");
const warnetLife = window.WarnetLife;

Object.keys(warnetLife).forEach(file => {
    const nama = warnetLife[file].nama;
    const link = warnetLife[file].link;

    const element = document.createElement("button");
    element.classList.add("download");
    element.setAttribute("data-key", file);
    element.innerText = nama;
    element.onclick = () => window.location.href = link;
    wall.appendChild(element);
});