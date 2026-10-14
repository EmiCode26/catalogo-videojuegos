const videojuegos = [
  {
    id: 1,
    titulo: "Total war warhammer",
    genero: "Estrategia por turno",
    categoria: "Estrategia",
    plataformas: "PC",
    año:"2016",
    desarrollador:"creative assembly",
    descripcion: "basicamente en el comienzo de la inestabilidades de las regiones elejiras una faccion de x raza podras elejir dos modos ya sea en una carrera contra el tiempo para saber cual de las razas controle el vortice y asi se convierte en la potencia mas poderoza o podes cumplir objetivos de la mision principal ya sea por conquista alianzas o ganar batallas legendarias",
    imagen: require("../../assets/images/total-war.png"),
  },
  {
    id: 2,
    titulo: "Red Dead Redemption 2",
    genero: "Acción / Aventura",
    categoria: "Acción",
    plataformas: "PC - PlayStation - Xbox",
    año:"2018",
    desarrollador:"Rockstar Games",
    descripcion:"Se trata de sobrevivir en el viejo oeste. A las 6 de la mañana te unirás a una banda para robar un banco; por la tarde, cuando pierdas jugando al póker con unos viejos en una cabaña alejada de Dios  y por la noche simplemente irás a caballo recorriendo el mundo, visitando distintos pueblos, mirando el atardecer o incluso pescando para despejar la mente ante el mundo caótico que te tocó vivir. ",
    imagen: require("../../assets/images/red-dead.png"),
  },
  {
    id: 3,
    titulo: "Hitman",
    genero: "supervivencia",
    categoria: "Acción",
    plataformas: "PC - PlayStation - xbox",
    año:"2016",
    desarrollador:"IO Interactive",
    descripcion:"sos un agente altamente secreto cual tu mision es matar obejtivos en multiples ecenarios ya sea matando a todos,matar de multiples maneras a cada objetivo o simplemente neutralizar de manera quirurgica los guardias para tener via libre para matar a los objetivos ",
    imagen: require("../../assets/images/hitman.png"),
  },
  {
    id: 4,
    titulo: "Assasin creed origin",
    genero: "Mundo abierto",
    categoria: "Acción",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año:"2017",
    desarrollador:"Ubisoft ",
    descripcion:"sos el protector de un pueblo llamado siwa que tras perder a tu hijo por una organizacion llamada la orden de los antiguos que cuyo objetivo es controlar el mundo mientras se ve envuelto en una guerra civil. lograra vengar la muerte de su hijo a mano de los antiguos mientras el pais cae a un abismo? podra controlar su ira antes de que haga daño a los que ama o simplemente dara su vida a dar caza a todos los miembros de la orde uno por uno? ",
    imagen: require("../../assets/images/assasin-creed.png"),
  },

  {
  id: 5,
  titulo: "Grand Theft Auto V",
  genero: "Acción / Mundo abierto",
  categoria: "Acción",
  plataformas: "PC - PlayStation - Xbox",
  año: "2013",
  desarrollador: "Rockstar Games",
  descripcion: "Descripción del juego...",
  imagen: require("../../assets/images/gta-v.png"),
  },


{
    id: 6,
    titulo: "Age of Empires II",
    genero: "Estrategia en tiempo real",
    categoria: "Estrategia",
    plataformas: "PC - Xbox",
    año: "1999",
    desarrollador: "Ensemble Studios",
    descripcion:
      "Empezás con unos aldeanos juntando madera y comida y, un rato después, estás organizando un ejército gigantesco porque tu vecino decidió construir una torre demasiado cerca de tu territorio.",
    imagen: require("../../assets/images/age-of-empires-2.png"),
  },

 {
    id: 7,
    titulo: "Civilization VI",
    genero: "Estrategia por turnos",
    categoria: "Estrategia",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2016",
    desarrollador: "Firaxis Games",
    descripcion:
      "Construís una civilización desde sus primeros asentamientos hasta convertirse en una potencia mundial. Podés ganar mediante ciencia, cultura, religión o simplemente convenciendo al resto con un ejército enorme.",
    imagen: require("../../assets/images/civilization-6.png"),
  },

{
    id: 8,
    titulo: "XCOM 2",
    genero: "Estrategia por turnos",
    categoria: "Estrategia",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2016",
    desarrollador: "Firaxis Games",
    descripcion:
      "La Tierra fue ocupada por alienígenas y comandás una resistencia que intenta recuperarla. Cada movimiento cuenta y un disparo que parecía imposible de fallar probablemente termine fallando.",
    imagen: require("../../assets/images/xcom-2.png"),
  },

{
    id: 9,
    titulo: "Resident Evil 7",
    genero: "Terror / Supervivencia",
    categoria: "Terror",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2017",
    desarrollador: "Capcom",
    descripcion:
      "Llegás a una casa abandonada buscando a tu esposa desaparecida y rápidamente descubrís que entrar ahí fue probablemente una de las peores decisiones que tomaste en tu vida.",
    imagen: require("../../assets/images/resident-evil-7.png"),
  },

 {
    id: 10,
    titulo: "Outlast",
    genero: "Terror / Supervivencia",
    categoria: "Terror",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2013",
    desarrollador: "Red Barrels",
    descripcion:
      "Entrás a investigar un manicomio abandonado armado únicamente con una cámara. No podés pelear, así que cuando aparece algo peligroso tu mejor estrategia suele ser correr y esconderte.",
    imagen: require("../../assets/images/outlast.png"),
  },

 {
    id: 11,
    titulo: "Alien: Isolation",
    genero: "Terror / Supervivencia",
    categoria: "Terror",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2014",
    desarrollador: "Creative Assembly",
    descripcion:
      "Estás atrapado en una estación espacial mientras un Xenomorfo te busca constantemente. Hacer ruido es mala idea y esconderte debajo de una mesa empieza a parecer una estrategia completamente razonable.",
    imagen: require("../../assets/images/alien-isolation.png"),
  },

{
    id: 12,
    titulo: "Amnesia: The Dark Descent",
    genero: "Terror psicológico",
    categoria: "Terror",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2010",
    desarrollador: "Frictional Games",
    descripcion:
      "Despertás dentro de un castillo sin recordar casi nada. Mientras intentás descubrir qué pasó, también tenés que evitar criaturas y tratar de no perder la cordura en lugares completamente oscuros.",
    imagen: require("../../assets/images/amnesia.png"),
  },

 {
    id: 13,
    titulo: "Forza Horizon 5",
    genero: "Carreras / Mundo abierto",
    categoria: "Carreras",
    plataformas: "PC - Xbox - PlayStation",
    año: "2021",
    desarrollador: "Playground Games",
    descripcion:
      "Tenés cientos de autos y un enorme mapa de México para recorrer. Podés participar en carreras profesionales o pasar media hora intentando hacer un salto ridículo con un auto que claramente no fue diseñado para eso.",
    imagen: require("../../assets/images/forza-horizon-5.png"),
  },

 {
    id: 14,
    titulo: "Need for Speed Heat",
    genero: "Carreras",
    categoria: "Carreras",
    plataformas: "PC - PlayStation - Xbox",
    año: "2019",
    desarrollador: "Ghost Games",
    descripcion:
      "De día competís en carreras legales para ganar dinero y de noche participás en carreras callejeras mientras tratás de escapar de una policía que cada vez tiene menos paciencia con vos.",
    imagen: require("../../assets/images/nfs-heat.png"),
  },

{
    id: 15,
    titulo: "F1 24",
    genero: "Simulación de carreras",
    categoria: "Carreras",
    plataformas: "PC - PlayStation - Xbox",
    año: "2024",
    desarrollador: "Codemasters",
    descripcion:
      "Te ponés al volante de un Fórmula 1 y descubrís rápidamente que frenar tarde en una curva funciona espectacularmente hasta que terminás viendo la carrera desde la grava.",
    imagen: require("../../assets/images/f1.png"),
  },

{
    id: 16,
    titulo: "Gran Turismo 7",
    genero: "Simulación de carreras",
    categoria: "Carreras",
    plataformas: "PlayStation",
    año: "2022",
    desarrollador: "Polyphony Digital",
    descripcion:
      "Coleccionás autos, los modificás y competís en distintos circuitos. También podés pasar una cantidad preocupante de tiempo decidiendo qué neumáticos poner antes de empezar una carrera.",
    imagen: require("../../assets/images/gran-turismo-7.png"),
  },

{
    id: 17,
    titulo: "The Witcher 3: Wild Hunt",
    genero: "RPG / Mundo abierto",
    categoria: "RPG",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2015",
    desarrollador: "CD Projekt Red",
    descripcion:
      "Sos Geralt de Rivia, un cazador de monstruos que intenta encontrar a Ciri. Por el camino vas a aceptar contratos, combatir criaturas y probablemente terminar jugando demasiadas partidas de Gwent.",
    imagen: require("../../assets/images/witcher-3.png"),
  },

{
    id: 18,
    titulo: "The Elder Scrolls V: Skyrim",
    genero: "RPG / Mundo abierto",
    categoria: "RPG",
    plataformas: "PC - PlayStation - Xbox - Switch",
    año: "2011",
    desarrollador: "Bethesda Game Studios",
    descripcion:
      "Sos el Sangre de Dragón y supuestamente tenés que salvar Skyrim. Aunque también podés ignorar completamente la misión principal y dedicarte durante horas a explorar cuevas y juntar objetos que nunca vas a usar.",
    imagen: require("../../assets/images/skyrim.png"),
  },

{
    id: 19,
    titulo: "Elden Ring",
    genero: "RPG / Acción",
    categoria: "RPG",
    plataformas: "PC - PlayStation - Xbox",
    año: "2022",
    desarrollador: "FromSoftware",
    descripcion:
      "Explorás un enorme mundo lleno de castillos, criaturas y enemigos capaces de recordarte rápidamente que todavía te falta aprender a esquivar. Morir forma parte bastante importante del proceso.",
    imagen: require("../../assets/images/elden-ring.png"),
  },

{
    id: 20,
    titulo: "Fallout 4",
    genero: "RPG / Mundo abierto",
    categoria: "RPG",
    plataformas: "PC - PlayStation - Xbox",
    año: "2015",
    desarrollador: "Bethesda Game Studios",
    descripcion:
      "Salís de un refugio nuclear para buscar a tu hijo en un mundo destruido. En el camino podés explorar, combatir mutantes, tomar decisiones y construir asentamientos mientras olvidás por completo cuál era tu misión original.",
    imagen: require("../../assets/images/fallout-4.png"),
  },

];
  
export default videojuegos;