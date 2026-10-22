
/* CONFIGURACIÓN DEL PORTAL
disponible: true = visible para alumnos / false = oculto
nuevo: true = etiqueta NUEVO / destacado: true = etiqueta DESTACADO */
const PORTAL = {
  categorias:["Computadora","Periféricos","Hardware","Extensiones","Software","Word","Excel","PowerPoint","Internet","Programación","IA","Otros"],
  niveles:[
    {id:"preescolar",nombre:"Preescolar",icono:"🧸",descripcion:"Actividades para aprender jugando.",juegos:[]},
    {id:"1primaria",nombre:"1.º Primaria",icono:"🌟",descripcion:"Primeras habilidades de computación.",juegos:[
      {
        id:"busqueda-computadora",
        nombre:"Búsqueda de la computadora",
        descripcion:"Voltea las cartas y encuentra la pieza escondida",
        icono:"🖥️",
        archivo:"juegos/1primaria/busqueda-computadora.html",
        categoria:"Computadora",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"rompecabezas-computadora",
        nombre:"RompeCompu",
        descripcion:"¡Arma cada rompecabezas y descubre todas las partes!",
        icono:"🖥️",
        archivo:"juegos/1primaria/rompecabezas-computadora.html",
        categoria:"Computadora",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]},
    {id:"2primaria",nombre:"2.º Primaria",icono:"🖥️",descripcion:"Partes y uso básico de la computadora.",juegos:[
      {id:"computadora-basica",nombre:"Monitor, ratón, teclado y gabinete",descripcion:"Reconoce las partes principales de una computadora.",icono:"🖥️",archivo:"juegos/2primaria/computadora-basica.html",categoria:"Hardware",disponible:true,nuevo:false,destacado:true}
    ]},
    {id:"3primaria",nombre:"3.º Primaria",
     icono:"🎮",
     descripcion:"Periféricos y actividades interactivas.",
     juegos:[
      {
        id:"perifericos-entrada-salida-mixtos",
        nombre:"Periféricos: entrada, salida y mixtos",
        descripcion:"Clasifica diferentes periféricos según su función.",
        icono:"🖥️",
        archivo:"juegos/3primaria/perifericos-entrada-salida-mixtos.html",
        categoria:"Periféricos",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"laberinto-perifericos",
        nombre:"Pixel Perifericos - Laberinto",
        descripcion:"Ayuda al pequeño explorador a llegar al periférico que responde la pregunta.",
        icono:"🖥️",
        archivo:"juegos/3primaria/laberinto-perifericos.html",
        categoria:"Periféricos",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]},
    {id:"4primaria",nombre:"4.º Primaria",icono:"🚀",descripcion:"Herramientas digitales y productividad.",juegos:[
      {
        id:"Rana Exploradora",
        nombre:"Rana Exploradora",
        descripcion:"Lee la pregunta y elige la respuesta correcta.",
        icono:"🖥️",
        archivo:"juegos/4primaria/rana-exploradora.html",
        categoria:"Extensiones",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]},
    {id:"5primaria",nombre:"5.º Primaria",icono:"💡",descripcion:"Informática y herramientas digitales.",juegos:[
     {
        id:"mision extensiones",
        nombre:"Misión Extensiones",
        descripcion:"Lee la pista y elige la extensión correcta.",
        icono:"🖥️",
        archivo:"juegos/5primaria/mision-extensiones.html",
        categoria:"Extensiones",
        disponible:true,
        nuevo:true,
        destacado:true
      },
       {
        id:"PacMaze",
        nombre:"PacMaze",
        descripcion:"Lleva al PacMan a la respuesta correcta.",
        icono:"🖥️",
        archivo:"juegos/5primaria/pacmaze.html",
        categoria:"Extensiones",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]},
    {id:"6primaria",nombre:"6.º Primaria",icono:"🏆",descripcion:"Retos y proyectos de computación.",juegos:[]},
    {id:"1secundaria",nombre:"1.º Secundaria",icono:"💻",descripcion:"Informática y herramientas digitales.",juegos:[]},
    {id:"2secundaria",nombre:"2.º Secundaria",icono:"📊",descripcion:"Datos, Excel y resolución de problemas.",juegos:[
      {
        id:"mini-tycoon-excel",
        nombre:"Mini Tycoon: Excel Edition",
        descripcion:"Resuelve misiones de una tienda utilizando fórmulas de Excel.",
        icono:"🎮",
        archivo:"juegos/2secundaria/mini-tycoon-excel.html",
        categoria:"Excel",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]},
    {id:"3secundaria",nombre:"3.º Secundaria",icono:"🤖",descripcion:"Programación, IA y proyectos digitales.",juegos:[
      {
        id:"laberinto-diagramas-flujo",
        nombre:"FlowMaze",
        descripcion:"Lleva a Pac-Man a la respuesta correcta sobre las formas de los diagramas de flujo.",
        icono:"🎮",
        archivo:"juegos/3secundaria/laberinto-diagramas-flujo.html",
        categoria:"Programación",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"space-invaders-flujo",
        nombre:"FlowInvaders",
        descripcion:"Una invasión de símbolos amenaza tu diagrama. Muévete con las flechas izquierda y derecha y dispara a la respuesta correcta.",
        icono:"🎮",
        archivo:"juegos/3secundaria/space-invaders-flujo.html",
        categoria:"Programación",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"Flow Racer 3D",
        nombre:"FlowRacer3D ",
        descripcion:"Busca la forma correcta durante la carrera y evita los obstáculos.",
        icono:"🎮",
        archivo:"juegos/3secundaria/flow-race.html",
        categoria:"Programación",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"Multitud de Ideas",
        nombre:"Multitud De Ideas",
        descripcion:"Acierta a la respuesta y duplica tu múltitud",
        icono:"🎮",
        archivo:"juegos/3secundaria/carrera-multitudes-diagramas.html",
        categoria:"Programación",
        disponible:true,
        nuevo:true,
        destacado:true
      },
      {
        id:"Space Waves Flujo",
        nombre:"Flow Waves",
        descripcion:"Surca un túnel arcade. Además de esquivar, recoge portales de práctica para ganar puntos extra.",
        icono:"🎮",
        archivo:"juegos/3secundaria/space-waves-flujo.html",
        categoria:"Programación",
        disponible:true,
        nuevo:true,
        destacado:true
      }
    ]}
  ]
};
