
/* Detrás del juego — estadísticas del portal */
(function () {
  "use strict";

  var endpoint =
    "https://javiercruz-didactico.goatcounter.com/count";

  // Cargar GoatCounter y registrar la visita a esta actividad.
  var script = document.createElement("script");
  script.setAttribute("data-goatcounter", endpoint);
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(script);

  // Crear un identificador de actividad a partir de su ruta.
  var actividad = location.pathname
    .split("/")
    .filter(Boolean)
    .slice(-3)
    .join("-")
    .replace(/\.html$/i, "")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .toLowerCase();

  // Registrar un evento por cada 30 segundos visibles.
  var segundos = 0;

  window.setInterval(function () {
    if (document.visibilityState !== "visible") return;

    segundos += 10;

    if (
      segundos >= 30 &&
      window.goatcounter &&
      typeof window.goatcounter.count === "function"
    ) {
      segundos -= 30;

      window.goatcounter.count({
        path: "tiempo-30s-" + actividad,
        title: "Tiempo activo: " + actividad,
        event: true,
        no_session: true
      });
    }
  }, 10000);
})();
