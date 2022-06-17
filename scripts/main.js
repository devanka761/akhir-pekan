const wall = document.querySelector(".container .bahas .konten .paragraf");

Object.keys(window.ListGame).forEach((file) => {
    const nama = window.ListGame[file].nama;
    const link = window.ListGame[file].link;
    const alt = window.ListGame[file].alt;
    const logo = window.ListGame[file].logo;

    const element = document.createElement("a");
    element.classList.add("kotak")
    element.setAttribute("href", link);
    element.innerHTML = (`
        <div class="logo">
            <img width="60" height="60" src="${logo}" alt="${alt}" />
        </div>
        <div class="nama">${nama}</div>
    `);

    wall.appendChild(element);
})