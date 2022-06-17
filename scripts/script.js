const menu = document.querySelector(`[data-menu="burger"]`);

menu.onclick = () => {
    const element = document.createElement("div");
    element.classList.add("Menus");
    element.innerHTML = (`
        <i class="fa-solid fa-x" data-menu="tutup"></i>
        <a href="https://devanka761.github.io/akhir-pekan/">Beranda</a>
        <a href="https://devanka761.github.io/akhir-pekan/saves/warnet-life/">Warnet Life</a>
        <a href="https://devanka761.github.io/akhir-pekan/saves/bakso-simulator/">Bakso Simulator</a>
    `);
    const closeMenu = element.querySelector(`[data-menu="tutup"]`);
    closeMenu.onclick = () => {
        element.classList.add("geserTutup");
        setTimeout(() => element.remove(), 500);
    }
    document.querySelector("body").appendChild(element);
}

home = () => {
    window.location.href = "https://devanka761.github.io/akhir-pekan/";
}