/*
  CONTROL DE ACTIVIDADES
  true  = visible y disponible
  false = oculto/no disponible

  Para agregar un juego:
  1. Copia un bloque.
  2. Cambia id, nombre, descripcion, icono y archivo.
  3. Cambia disponible a true cuando quieras publicarlo.
*/
const PORTAL = {
  niveles: [
    {
      id: "preescolar",
      nombre: "Preescolar",
      icono: "🧸",
      descripcion: "Actividades para aprender jugando.",
      juegos: []
    },
    {
      id: "1primaria",
      nombre: "1.º Primaria",
      icono: "🌟",
      descripcion: "Primeras habilidades de computación.",
      juegos: []
    },
    {
      id: "2primaria",
      nombre: "2.º Primaria",
      icono: "🖥️",
      descripcion: "Partes y uso básico de la computadora.",
      juegos: [
        {
          id: "computadora-basica",
          nombre: "Monitor, ratón, teclado y gabinete",
          descripcion: "Reconoce las partes principales de una computadora.",
          icono: "🖥️",
          archivo: "juegos/2primaria/computadora-basica.html",
          disponible: true
        }
      ]
    },
    {
      id: "3primaria",
      nombre: "3.º Primaria",
      icono: "🎮",
      descripcion: "Periféricos y actividades interactivas.",
      juegos: []
    },
    {
      id: "4primaria",
      nombre: "4.º Primaria",
      icono: "🚀",
      descripcion: "Herramientas digitales y productividad.",
      juegos: []
    },
    {
      id: "5primaria",
      nombre: "5.º Primaria",
      icono: "💡",
      descripcion: "Informática y herramientas digitales.",
      juegos: []
    },
    {
      id: "6primaria",
      nombre: "6.º Primaria",
      icono: "🏆",
      descripcion: "Retos y proyectos de computación.",
      juegos: []
    },
    {
      id: "1secundaria",
      nombre: "1.º Secundaria",
      icono: "💻",
      descripcion: "Informática y herramientas digitales.",
      juegos: []
    },
    {
      id: "2secundaria",
      nombre: "2.º Secundaria",
      icono: "📊",
      descripcion: "Datos, Excel y resolución de problemas.",
      juegos: []
    },
    {
      id: "3secundaria",
      nombre: "3.º Secundaria",
      icono: "🤖",
      descripcion: "Programación, IA y proyectos digitales.",
      juegos: []
    }
  ]
};