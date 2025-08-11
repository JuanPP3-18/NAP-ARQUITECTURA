const proyectos = [
  
    {    
    titulo: "EPA",
    primeraImg: "../imagenes/logo.png",
    segundaImg: "../imagenes/vistas.png",
    link: "../PROYECTOS/EPA.html",},
  
    {    
    titulo: "aaa",
    primeraImg: "../imagenes/logo.png",
    segundaImg: "../imagenes/vistas.png",
    link: "../PROYECTOS/AAA.html",},
  
    { 
    titulo: "asdasd",
    primeraImg: "../imagenes/logo.png",
    segundaImg: "../imagenes/vistas.png",
    link: "../PROYECTOS/asdasd.html",},
  

];





const contenedor = document.getElementById("proyectos");

proyectos.forEach(p => {
  const card = document.createElement("article");
  card.className = "tarjeta";
  card.innerHTML = `
  <div class="proyectos-container">
    <a class="tarjeta__link" href="${p.link}">
      <div class="tarjeta__img">
        <img class="img-default" src="${p.primeraImg}" alt="${p.titulo}">
        <img class="img-hover" src="${p.segundaImg}" alt="${p.titulo}">
        <h3 class="tarjeta__title">${p.titulo}</h3>
      </div>
    </a>
  
  </div>
  `;
  contenedor.appendChild(card);
});
