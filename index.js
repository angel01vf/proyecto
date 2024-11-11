const nobtn = document.querySelector("#nobtn");

nobtn.addEventListener("mouseover", function () {
    const container = nobtn.parentElement; // Obtenemos el contenedor padre
    const containerRect = container.getBoundingClientRect(); // Tamaño del contenedor
    const buttonRect = nobtn.getBoundingClientRect(); // Tamaño del botón

    // Generar posiciones aleatorias que mantengan el botón dentro del contenedor
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Asignar nuevas posiciones al botón
    nobtn.style.position = "absolute";
    nobtn.style.left = `${randomX}px`;
    nobtn.style.top = `${randomY}px`;
});
