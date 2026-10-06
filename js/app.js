const niveles = document.getElementById("niveles");
const juegos = document.getElementById("juegos");
const listaJuegos = document.getElementById("listaJuegos");
const tituloNivel = document.getElementById("tituloNivel");
const volver = document.getElementById("volver");

function renderNiveles(){
  niveles.innerHTML = "";
  PORTAL.niveles.forEach(nivel => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="icono">${nivel.icono}</div>
      <h3>${nivel.nombre}</h3>
      <p>${nivel.descripcion}</p>
      <button class="btn primario" onclick="mostrarJuegos('${nivel.id}')">Ver actividades</button>
    `;
    niveles.appendChild(card);
  });
}

function mostrarJuegos(id){
  const nivel = PORTAL.niveles.find(n => n.id === id);
  if(!nivel) return;

  tituloNivel.textContent = nivel.nombre;
  listaJuegos.innerHTML = "";

  const disponibles = nivel.juegos.filter(j => j.disponible);

  if(disponibles.length === 0){
    listaJuegos.innerHTML = `
      <article class="card">
        <div class="icono">📚</div>
        <h3>Próximamente</h3>
        <p>En este momento no hay actividades disponibles para este nivel.</p>
      </article>`;
  } else {
    disponibles.forEach(juego => {
      const card = document.createElement("article");
      card.className = "card juego";
      card.innerHTML = `
        <div>
          <div class="icono">${juego.icono}</div>
          <h3>${juego.nombre}</h3>
          <p>${juego.descripcion}</p>
          <div class="estado">● ACTIVIDAD DISPONIBLE</div>
        </div>
        <a class="btn primario" href="${juego.archivo}">▶ Jugar</a>
      `;
      listaJuegos.appendChild(card);
    });
  }

  document.querySelector("section").classList.add("oculto");
  juegos.classList.remove("oculto");
  window.scrollTo({top:0, behavior:"smooth"});
}

volver.addEventListener("click", () => {
  juegos.classList.add("oculto");
  document.querySelector("section").classList.remove("oculto");
  window.scrollTo({top:0, behavior:"smooth"});
});

renderNiveles();