const proyectos = [
  {
    titulo: "EPA",
    imagenNormal: "../imagenes/logo.png",
    imagenHover: "../imagenes/vistas.png",
    link: "../PROYECTOS/EPA.html",
  
    titulo: "EPA",
    imagenNormal: "../imagenes/logo.png",
    imagenHover: "../imagenes/vistas.png",
    link: "../PROYECTOS/EPA.html",
  
    titulo: "EPA",
    imagenNormal: "../imagenes/logo.png",
    imagenHover: "../imagenes/vistas.png",
    link: "../PROYECTOS/EPA.html",
  
  },

];




const contenedor = document.getElementById("proyectos");

proyectos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  div.style.backgroundImage = `url(${p.imagenNormal})`;

  div.addEventListener("mouseenter", () => {          //como el hover
    div.style.backgroundImage = `url(${p.imagenHover})`;
  });
  div.addEventListener("mouseleave", () => {
    div.style.backgroundImage = `url(${p.imagenNormal})`;
  });

  div.innerHTML = `<a href="${p.link}"><h3>${p.titulo}</h3></a>`;
  contenedor.appendChild(div);
});
